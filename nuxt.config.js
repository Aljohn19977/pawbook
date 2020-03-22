
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/animsition.css' },
      { rel: 'stylesheet', href: '/css/css-circular-prog-bar.css' },
      { rel: 'stylesheet', href: '/css/lightbox.css' },
      { rel: 'stylesheet', href: '/css/line-awesome-font-awesome.css' },
      { rel: 'stylesheet', href: '/css/line-awesome.css' },
      { rel: 'stylesheet', href: '/css/materialize.css' },
      { rel: 'stylesheet', href: '/css/materialize.min.css' },
      { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '/css/owl.theme.default.min.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ],
    script: [
      { src: 'js/jquery.min.js', body: true },
      { src: 'js/materialize.min.js', body: true },
      { src: 'js/lightbox.js', body: true },
      { src: 'js/owl.carousel.min.js', body: true },
      { src: 'js/animsition.min.js', body: true },
      { src: 'js/animsition-custom.js', body: true },
      { src: 'js/main.js', body: true },
      ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      "./plugins/mixins/user.js"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  // axios: {
  //   baseURL: "http://pawbookserverapi.test/api"
  // },

  auth: {
    strategies: {
      local : {
        endpoints: {
          login: {
            url: "http://pawbookserverapi.test/api/auth/login",
            method: "post",
            propertyName: "meta.token"
          },
          user: {
            url: "http://pawbookserverapi.test/api/auth/user",
            method: "get",
            propertyName: "data"
          },
          logout: {
            url: "http://pawbookserverapi.test/api/auth/logout",
            method: "post"
          }
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
