module.exports = {
  name: 'Thomas Stufano',
  title: 'Software Engineer',
  facts: {
    home: {
        icon: '<i class="fa fa-home fact-icon"></i>',
        name: 'Residence',
        value: '<a href="https://maps.app.goo.gl/qhev2K3mbxbPA5qx8">Mira, Venice, Italy</a>'
    },
    email: {
        icon: '<i class="fa fa-envelope fact-icon"></i>',
        name: 'Email',
        value: '<a href="mailto:thomas.stufano@gmail.com">thomas.stufano@gmail.com</a>'
    },
    github: {
        icon: '<i class="fa-brands fa-github fact-icon"></i>',
        name: 'GitHub',
        value: '<a href="https://github.com/Twenyone">Twenyone</a>'
    },
    linkedin: {
        icon: '<i class="fa-brands fa-linkedin fact-icon"></i>',
        name: 'Linkedin',
        value: '<a href="https://www.linkedin.com/in/thomas-stufano-499a68211/">Thomas Stufano</a>'
    },
  },
  skills: ['.NET Core', 'ReactNative', 'Angular', 'AngularJS', 'Xamarin', 'SQL Server', 'Azure SQL', 'T-SQL', 'SQLite', 'Git', 'Azure DevOps', 'CI/CD', 'Docker', 'Expo'],
  positions: [
    {
      title: 'Software Engineer',
      company: 'Blizzard S.R.L',
      location: 'Mira, Venice, Italy',
      mode: 'Remote',  // or 'Hybrid', 'In-person'
      period: 'January 2025 - Present',
      skills: ['.NET Core', 'DevExpress', 'SQLServer', 'T-SQL','Git', 'Docker'],
      contents: `
Joined Blizzard S.R.L in January 2025 as a Software Engineer.

- Building a new tool for managing industrial machines, using .NET Core and DevExpress on the frontend and SQL Server on the backend.
- Maintaining and improving existing tools, using Git for version control and Docker for containerization.
      `
    },
    {
      title: 'Software Engineer',
      company: 'Bizeta Retail Solutions srl | a Custom company / Custom S.p.A',
      location: 'Mestre and Mira, Italy',
      mode: 'Hybrid',  // or 'Remote', 'Hybrid'
      period: 'October 2020 - January 2025 · 4 years 4 months',
      skills: ['.NET Core', 'AzureSQL', 'SQLServer', 'T-SQL', 'SQLite', 'Angular', 'AngularJS', 'ReactNative', 'Xamarin', 'Azure DevOps', 'CI/CD', 'Git', 'Expo'],
      contents: `
- GShop Suite (2020-2022): built small integrations and a .NET Core ETL connector between GShop Suite and [IdStore](https://www.custom.biz/en_GB/product/software/id-store), replacing legacy handheld Windows CE devices with newer Android ones (Xamarin Android).
- OneStore (2022-2025): joined the development team for [OneStore](https://www.custom.biz/en_GB/product/software/onestore), part of the Software Business Unit of Custom S.p.A. and a point-of-sale solution for the retail fashion and luxury sector; built the backend in .NET and progressively took on frontend work in ReactNative with [Expo](https://expo.dev).
- Supported OneStore's international footprint for the OTB group across Germany, Italy, USA, France and Japan, including leading the migration and customization of the application for multiple major Italian fashion retail rollouts.
- Version control and branch workflow: Git with Azure DevOps and GitKraken (Git GUI), following a release branch workflow with pull request policies.`
  }
  ],
  educations: [
    {
      title: 'High School Diploma in IT',
      institution: 'ITIS C. Zuccante',
      location: 'Mestre (Venice), Italy',
      mode: 'In-person',  // or 'Remote', 'Hybrid'
      period: 'September 2014 - July 2020 · 5 years',
      skills: ['computer science', 'mathematics', 'electronics'],
      contents: `Specialized subjects studied: mathematics, computer science, statistics, electronics.`
    }
  ],
  languages: [
    {
      title: 'Italian',
      levels: ['Mother Tongue']
    },
    {
      title: 'English',
      isSecondLanguage: true,
      levels:['Listening: B2', 'Reading: B2', 'Writing: B2', 'Speaking: B2']
    }
  ]
};