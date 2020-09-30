module.exports = {
  author: "Deacon",
  siteTitle: "Deacon's portfolio",
  siteShortTitle: "DEACON", // Used as logo text in header, footer, and splash screen
  siteDescription: "A place where I explore with different ideas",
  siteUrl: "https://reverent-volhard-b67a22.netlify.app",
  siteLanguage: "en_US",
  siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

  splashScreen: true, // Set this to true if you want to use the splash screen

  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40deaconpoon",
  shownArticles: 3,

  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/deaconpoon/",
    },
    {
      name: "Medium",
      url: "https://medium.com/@deaconpoon",
    },
    {
      name: "Github",
      url: "https://github.com/deaconpoon",
    },
  ],

  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
      {
        name: "Articles",
        url: "/#articles",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
  },

  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
