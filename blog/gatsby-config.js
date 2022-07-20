module.exports = {
  siteMetadata: {
    pathPrefix: '/blog',
    title: 'Solution Architecture hints and tips',
    description:
      'A list of ',
    url: 'https://https://giovanni-savino.github.io/',
    author: 'Giovanni Savino',
    image: '/og-image2.jpg',
    intro: 'DevOps practices, cloud architectures and integration capabilities',
    menuLinks: [
      {
        name: '</> Home',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
    ],
    footerLinks: [
      {
        name: 'Linkedin',
        url: 'https://it.linkedin.com/in/giovanni-savino-66bb8083',
      }, 
      {
        name: 'GitHub',
        url: 'https://github.com/giovanni-savino',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {
        colorToggle:	false
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#aaaaaa`,
        theme_color: `#aaaaaa`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.svg'),
      },
    },
  ],
}
