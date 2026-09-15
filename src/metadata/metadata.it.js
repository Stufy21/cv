module.exports = {
  locale: 'it',
  name: 'Thomas Stufano',
  title: 'Software Engineer',
  intro: `Software Engineer con la passione per l'informatica fin da bambino, specializzato nello sviluppo di software basato su .NET e React Native. Considero il lavoro di squadra fondamentale nello sviluppo di software su larga scala, e mi impegno costantemente nell'apprendimento continuo e in un sano equilibrio tra vita privata e lavoro. Nel tempo libero: palestra, libri, film, serie TV, viaggi e videogiochi.`,
  gdprText: `Autorizzo il trattamento dei dati personali contenuti nel presente curriculum vitae ai sensi dell'art. 13 del D. Lgs. 196/2003 e dell'art. 13 del Regolamento UE 2016/679 (GDPR), ai fini della selezione e della valutazione della mia candidatura.`,
  ui: {
    lastUpdate: 'Ultimo aggiornamento',
    downloadPdf: 'Scarica versione PDF',
    upToDate: 'La versione aggiornata del CV è disponibile su',
    coreSkills: 'Competenze Chiave',
    experience: 'Esperienza Professionale',
    education: 'Istruzione',
    languageSkills: 'Lingue',
  },
  facts: {
    home: {
        icon: '<i class="fa fa-home fact-icon"></i>',
        name: 'Residenza',
        value: '<a href="https://maps.app.goo.gl/qhev2K3mbxbPA5qx8">Mira, Venezia, Italia</a>'
    },
    email: {
        icon: '<i class="fa fa-envelope fact-icon"></i>',
        name: 'Email',
        value: '<a href="mailto:thomas.stufano@gmail.com">thomas.stufano@gmail.com</a>'
    },
    github: {
        icon: '<i class="fa-brands fa-github fact-icon"></i>',
        name: 'GitHub',
        value: '<a href="https://github.com/Stufy21">Stufy21</a>'
    },
    linkedin: {
        icon: '<i class="fa-brands fa-linkedin fact-icon"></i>',
        name: 'LinkedIn',
        value: '<a href="https://www.linkedin.com/in/thomas-stufano-499a68211/">Thomas Stufano</a>'
    },
  },
  skills: ['.NET Core', 'ReactNative', 'Angular', 'AngularJS', 'Xamarin', 'SQL Server', 'Azure SQL', 'T-SQL', 'SQLite', 'Git', 'Azure DevOps', 'CI/CD', 'Docker', 'Expo'],
  positions: [
    {
      title: 'Software Engineer',
      company: 'Blizzard S.R.L',
      location: 'Mira, Venezia, Italia',
      mode: 'Remoto',  // or 'Ibrido', 'In sede'
      period: 'Gennaio 2025 - Presente',
      skills: ['.NET Core', 'DevExpress', 'SQLServer', 'T-SQL','Git', 'Docker'],
      contents: `
Entrato in Blizzard S.R.L a gennaio 2025 come Software Engineer.

- Sviluppo di un nuovo strumento per la gestione di macchinari industriali, utilizzando .NET Core e DevExpress per il frontend e SQL Server per il backend.
- Manutenzione e miglioramento di strumenti esistenti, utilizzando Git per il controllo versione e Docker per la containerizzazione.
      `
    },
    {
      title: 'Software Engineer',
      company: 'Bizeta Retail Solutions srl | a Custom company / Custom S.p.A',
      location: 'Mestre e Mira, Italia',
      mode: 'Ibrido',  // or 'Remoto', 'Ibrido'
      period: 'Ottobre 2020 - Gennaio 2025 · 4 anni e 4 mesi',
      skills: ['.NET Core', 'AzureSQL', 'SQLServer', 'T-SQL', 'SQLite', 'Angular', 'AngularJS', 'ReactNative', 'Xamarin', 'Azure DevOps', 'CI/CD', 'Git', 'Expo'],
      contents: `
- GShop Suite (2020-2022): sviluppo di piccole integrazioni e di un connettore ETL (.NET Core) tra GShop Suite e [IdStore](https://www.custom.biz/en_GB/product/software/id-store), per sostituire i vecchi dispositivi palmari Windows CE con dispositivi Android più moderni (Xamarin Android).
- OneStore (2022-2025): ingresso nel team di sviluppo di [OneStore](https://www.custom.biz/en_GB/product/software/onestore), la soluzione di punto vendita di Custom S.p.A. per il settore retail fashion e luxury, sviluppata all'interno della Software Business Unit; sviluppo del backend in .NET e, progressivamente, del frontend in ReactNative con [Expo](https://expo.dev).
- Supporto al rollout internazionale di OneStore in Germania, Italia, USA, Francia e Giappone, guidando anche la migrazione e la personalizzazione dell'applicativo per diversi importanti rilasci retail in Italia.
- Controllo versione e workflow di branch: Git con Azure DevOps e GitKraken (Git GUI), seguendo un workflow a release branch con policy di pull request.`
  }
  ],
  educations: [
    {
      title: 'Diploma di Perito Informatico',
      institution: 'ITIS C. Zuccante',
      location: 'Mestre (Venezia), Italia',
      mode: 'In sede',  // or 'Remoto', 'Ibrido'
      period: 'Settembre 2014 - Luglio 2020 · 5 anni',
      skills: ['informatica', 'matematica', 'elettronica'],
      contents: `Materie di indirizzo studiate: matematica, informatica, statistica, elettronica.`
    }
  ],
  languages: [
    {
      title: 'Italiano',
      levels: ['Madrelingua']
    },
    {
      title: 'Inglese',
      isSecondLanguage: true,
      levels:['Ascolto: B2', 'Lettura: B2', 'Scrittura: B2', 'Parlato: B2']
    }
  ]
};
