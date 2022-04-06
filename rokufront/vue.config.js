module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/assets/sass/vars.scss";
            @import "@/assets/sass/reset.scss";
            @import "@/assets/sass/main.scss";
          `
        }
      }
    },

    devServer: {
      proxy: {
        '/users': {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {'^users': ''}
        },

        '/movies': {
          target: "http://localhost/Roku_Flashback/api/index.php",
          changeOrigin: true,
          pathRewrite: {'^/movies': ''}
        }

      }
    }
  };