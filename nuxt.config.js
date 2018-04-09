const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CLIENT_TYPE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CMA_ACCESS_TOKEN',
  'CTF_PERSON_ID',
  'CTF_JOB_TYPE_ID',
  'CTF_PERSON_TYPE_ID',
  'CTF_ABOUT_TYPE_ID',
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)
const cmaContentful = require('contentful-management')
const cmaClient = cmaContentful.createClient({
  accessToken: ctfConfig.CTF_CMA_ACCESS_TOKEN
})
const apiAccessToken = '6cf48f0dd9d347a88a67e0f66a9302a5';



const config = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'SiR MaRY - We Decomplex Digital',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'SiR MaRY ist eine Kreativagentur, die Marken durch die Komplexität der vernetzten Welt führt.' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset: utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' },
      // { name: 'viewport', content: 'width: device-width, initial-scale: 1.0, maximum-scale: 1.0, user-scalable: no'  },
      { content: 'True', name: 'HandheldFriendly'  },
      { content: '320', name: 'MobileOptimized'  },
      { itemprop: 'url', content: 'http://sirmarybotai-clean.dev'  },
      { itemprop: 'name', content: 'SiR MaRY – We Decomplex Digital'  },
      { name: 'keywords', content: 'Sir Mary, Digital, Kommunikation, Digital Business Consulting, Creative Campaigning, Media Distribution, Zurich, Switzerland' },
      { name: 'twitter:title', content: 'SiR MaRY – We Decomplex Digital'  },
      { name: 'twitter:url', content: 'http://www.sirmary.com/'  },
      { name: 'twitter:card', content: 'summary_large_image'  },
      { name: 'twitter:image:src', content: 'http://sirmarybotai-clean.dev/img/share.jpg'  },
      { name: 'twitter:domain', content: 'http://sirmarybotai-clean.dev' },
      { property: 'og:site_name', content: 'SiR MaRY – We Decomplex Digital' },
      { property: 'og:title', content: 'SiR MaRY – We Decomplex Digital' },
      { property: 'og:description', content: 'SiR MaRY ist eine Kreativagentur, die Marken durch die Komplexität der vernetzten Welt führt.'},
      { property: 'og:url', content: 'http://sirmarybotai-clean.dev'  },
      { property: 'og:type', content: 'website'  },
      { itemprop: 'name', content: 'Content'  },
      { property: 'og:image', content: 'http://sirmarybotai-clean.dev/img/share.jpg'  },
      { property: 'og:image:type', content: 'image/png'  },
      { property: 'og:image:width', content: '1920'  },
      { property: 'og:image:height', content: '1135'  }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:700'}
    ]
  },


  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#85FF00' },
  // loading: false,

  css: [
     'normalize.css',
     {src: '~assets/css/sirmary.scss', lang: 'scss'}
  ],

  // mode: 'spa',

  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    // or
    analyze: {
      analyzerMode: 'static'
    },
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

      // Uncomment line below to view webpack rules
      console.dir(config.module.rules)
      }

    },

    vendor: ['eventsource-polyfill', 'babel-polyfill'],


    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%']
      })
    ],

    babel: {
      presets: [
        ['vue-app', {
          useBuiltIns: true,
          targets: { ie: 9, uglify: true }
        }
        ]
      ]
    }
  },

  /*
  ** ᕕ( ᐛ )ᕗ CTF-BLOG-IN-5-MINUTES
  ** Make client available everywhere via Nuxt plugins
  */
  plugins: [
    '~plugins/contentful',
    '~plugins/marked',
    { src: '~plugins/ga.js', ssr: false }
  ],

  // router: { base: '/sirmary/' },


  /*
  ** ᕕ( ᐛ )ᕗ CTF-BLOG-IN-5-MINUTES
  ** Get all blog posts from Contentful
  ** and generate the needed files upfront
  **
  ** Included:
  ** - blog posts
  ** - available blog post tags
  */
  generate: {
    routes () {
      return Promise.all([
        // get all blog posts
        cdaClient.getEntries({
          'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
        }),
         cdaClient.getEntries({
          'content_type': ctfConfig.CTF_PERSON_TYPE_ID
        }),
         cdaClient.getEntries({
          'content_type': ctfConfig.CTF_JOB_TYPE_ID
        })
        // cdaClient.getEntries({
        //   'content_type':ctfConfig.CTF_CLIENT_TYPE_ID
        // })
        // get the blog post content type
        // cmaClient.getSpace(ctfConfig.CTF_SPACE_ID)
        // .then(space => space.getContentType(ctfConfig.CTF_BLOG_POST_TYPE_ID))
      ])
      .then(([entries, person, job, client]) => {
        let routes = [
          // map entries to URLs
          ...entries.items.map(entry => `/cases/${entry.fields.slug}`),
          // map clients to URLS
          // ...client.items.map(entry => `/clients/${entry.fields.slug}`),
          // map team to URLS
          ...person.items.map(entry => `/team/${entry.fields.slug}`),
          // map jobs to URLS
          ...job.items.map(entry => `/jobs/${entry.fields.slug}`)
          // map all possible tags to URLs
          //...postType.fields.find(field => field.id === 'tags').items.validations[0].in.map(tag => `/tags/${tag}`)
          // ...postType.fields.find(field => field.id === 'client').items.validations[0].in.map(client => `/clients/${client}`)
        ]
        return routes
      })
    }
  },

  /*
  ** Define environment variables being available
  ** in generate and browser context
  */
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_CMA_ACCESS_TOKEN: ctfConfig.CTF_CMA_ACCESS_TOKEN,
    CTF_PERSON_ID: ctfConfig.CTF_PERSON_ID,
    CTF_PERSON_TYPE_ID: ctfConfig.CTF_PERSON_TYPE_ID,
    CTF_ABOUT_TYPE_ID: ctfConfig.CTF_ABOUT_TYPE_ID,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID,
    CTF_CLIENT_TYPE_ID: ctfConfig.CTF_CLIENT_TYPE_ID,
    apiAccessToken: '6cf48f0dd9d347a88a67e0f66a9302a5'
  },
}

module.exports = config
