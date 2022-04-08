const BASE_URL = "http://localhost:3000";
const UMS_PATH = "/users";

//add api endpoint
const API_URL = "http://localhost/Roku_Flashback/api/index.php";

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
        target: `${BASE_URL + UMS_PATH}`,
        changeOrigin: true,
        pathRewrite: {'^/users': ''}
        },

        '/movies': {
          target: `${API_URL}`,
          changeOrigin: true,
          pathRewrite: {'^/movies': ''}
        }

      }
    }
  };