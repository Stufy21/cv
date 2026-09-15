const handlebars = require('handlebars');
const fs = require('fs-extra');
const markdownHelper = require('./utils/helpers/markdown');
const getSlug = require('speakingurl');
const dayjs = require('dayjs');
require('dayjs/locale/it');
const repoName = require('git-repo-name');
const username = require('git-username');
const buildPdf = require('./utils/pdf.js');

const srcDir = __dirname;
const outputDir = __dirname + '/../dist';

const locales = [
  { code: 'en', label: 'EN', urlPath: '', data: require('./metadata/metadata.en') },
  { code: 'it', label: 'IT', urlPath: 'it/', data: require('./metadata/metadata.it') },
];

// Clear dist dir
fs.emptyDirSync(outputDir);

// Copy shared assets to dist root; locale sub-dirs reference them via assetsPrefix
fs.copySync(srcDir + '/assets', outputDir);

handlebars.registerHelper('markdown', markdownHelper);
const source = fs.readFileSync(srcDir + '/templates/index.html', 'utf-8');
const template = handlebars.compile(source);

const baseUrl = `https://${username()}.github.io/${repoName.sync()}`;
const dateFormats = { en: 'MMMM D, YYYY', it: 'D MMMM YYYY' };

(async () => {
  for (const locale of locales) {
    const localeDir = outputDir + '/' + locale.urlPath;
    fs.ensureDirSync(localeDir);

    const assetsPrefix = locale.urlPath === '' ? '' : '../'.repeat(locale.urlPath.split('/').filter(Boolean).length);
    const pdfFileName = `${getSlug(locale.data.name)}.${getSlug(locale.data.title)}.pdf`;
    const otherLanguages = locales
      .filter((l) => l.code !== locale.code)
      .map((l) => ({ code: l.code, label: l.label, href: assetsPrefix + l.urlPath + 'index.html' }));

    const updated = dayjs().locale(locale.code).format(dateFormats[locale.code]);

    const html = template({
      ...locale.data,
      assetsPrefix,
      pageUrl: baseUrl + '/' + locale.urlPath,
      pdfFileName,
      updated,
      otherLanguages,
    });

    fs.writeFileSync(localeDir + 'index.html', html);
    await buildPdf(`${localeDir}index.html`, `${localeDir}${pdfFileName}`);
  }
})();
