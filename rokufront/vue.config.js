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
    }
  };