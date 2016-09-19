exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: "javascripts/application.js"
    },
    stylesheets: {
      joinTo: "stylesheets/application.css"
    },
    templates: {
      joinTo: "javascripts/application.js"
    }
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to "/assets/static". Files in this directory
    // will be copied to `paths.public`.
    assets: /^(assets\/static)/
  },

  // Phoenix paths configuration
  paths: {
    // Dependencies and current project directories to watch
    watched: [
      "assets"
    ],

    // Where to compile files to
    public: "tmp/assets"
  },

  // Configure your plugins
  plugins: {
    babel: {
      // Do not use ES6 compiler in vendor code
      ignore: [/assets\/vendor/]
    },
    postcss: {
      processors: [
        require("autoprefixer")(["last 8 versions"]),
      ]
    },
    sass: {
      mode: "native",
      options: {
        includePaths: ["node_modules/tachyons-sass"]
      }
    }
  },

  modules: {
    autoRequire: {
      "javascripts/application.js": ["assets/javascripts/application"]
    }
  },

  npm: {
    enabled: true
  }
};
