<template>
  <section class="app-wrapper">
    <header class="col-sm-12 roku-header">
      <img src="@/assets/images/roku.svg" alt="Roku logo">
      
      <nav class="float-right">
      <ul v-if="authenticated">            
        <!-- switch users -->
        <li @click="switchUsers" title="Swtich users"><i class="fas fa-user-circle"></i></li>
        <!-- user settings, but only if you are admin -->
        <li><i class="fas fa-cog"></i></li>
        <!-- log out -->
        <li @click="logOut" title="Log out"><i class="fas fa-power-off"></i></li>					
      </ul>
      </nav>
    </header>

    <router-view @setauth="setAuthenticated"></router-view>
  
  </section>
</template>

<script>
export default {
  name: "TheRokuFlashbackApp",

  data() {
    return {
      authenticated: false
    }
  },

  created() {
    if (window.localStorage.getItem('currentUser')) {
      this.$router.push({
        name: 'UserHome',
        params: JSON.parse(localStorage.getItem('currentUser'))
      });

      // need to let the app know this saved user is a valid user
      this.setAuthenticated(true);
    }
  },

  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },

    switchUsers() {
      this.$router.push({ name: 'UserSelect'});
    },

    logOut() {
      if (window.localStorage.getItem('currentUser')) {
        localStorage.removeItem('currentUser');
      }
      this.setAuthenticated(false);
      this.$router.push({ name: 'Login'});
    }
  }
  
}
</script>

<style lang="scss">
  @import "@/assets/sass/main.scss";
</style>
