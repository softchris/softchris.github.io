module.exports = {
  ga: 'UA-103000646-1',
  markdown: {
    lineNumbers: true
  },
  plugins: [
    require('@vuepress/plugin-google-analytics'),
    {
      'ga': 'UA-103000646-1'
    }
  ],
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Author',
        link: '/author/'
      },
      {
        text: 'Blog',
        link: '/articles/'
      }
    ],
    sidebar: [
      /*
      {
        title: 'Blog',   // required
        path: '/articles/',      // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/pages/vuex',
          '/pages/typescript'
        ]
      }
      */
    ]
  }
}
