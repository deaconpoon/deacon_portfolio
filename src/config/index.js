module.exports = {
  author: "Deacon",
  siteTitle: "Deacon's portfolio",
  siteShortTitle: "Deacon", // Used as logo text in header, footer, and splash screen
  siteDescription: "A place where I explore with different ideas",
  siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
  siteLanguage: "en_US",
  siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

  splashScreen: false, // Set this to true if you want to use the splash screen

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
    {
      name: "Behance",
      url: "https://www.behance.net/",
    },
  ],

  navLinks: {
    menu: [
      {
        name: "Articles",
        url: "/#articles",
      },
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Features",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
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
