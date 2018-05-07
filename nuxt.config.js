const axios = require('axios');
module.exports = {
  /*
   ** Extend nuxt using nuxt modules system (Alpha)
   ** Learn more: https://github.com/nuxt/nuxt-modules
   */
  modules: [ {
    src: '@nuxtjs/pwa',
    options: {
      icon: {
        sizes: [ 512, 192, 380 ]
      }
    }
  } ],

  /*
   ** Headers of the page
   */
  head: {
    title: "starter",
    meta: [ {
      charset: "utf-8"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
    {
      hid: "description",
      name: "description",
      content: "Nuxt.js project"
    }
    ],
    link: [ {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.png"
    } ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#ec7c74"
  },
  /*
   ** Customize manifest.json
   */
  manifest: {
    name: "Nuxt.js",
    theme_color: "#3B8070"
  },
  /*
   ** Generate SSR
   */
  generate: {
    routes: function (callback) {
      axios.all([
        axios.get('https://next.bdarts.org/wp-json/wp/v2/pages')
      ])
        .then(axios.spread(function (pages, categories) {
          let routes1 = pages.data.map((page) => {
            return '/' + page.slug
          });

          callback(null, routes1);
        }), function (err) {
          return next(err);
        });
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
