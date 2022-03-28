<template>
  <section class="container">
    <div class="jumbotron">
        <h1>Welcome to Flashblack!</h1>
        <p class="lead">
        Before revisiting your favourite movies, tv shows or music from yesteryear, please log in with a valid username and password.
        </p>
    </div>

    <section class="log-in">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input v-model="username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>

      <label class="sr-only" for="inlineFormPassword">Name</label>
      <input v-model="password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
    </section>

    <button
        type="submit" 
        class="btn btn-primary login-submit"
        @click="tryLogin"
      >Go!
    </button>
  </section>
</template>

<script>
export default {
  name: 'TheLogin',

  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    tryLogin() {
      //and use the rout to show the next view 
      //TODO: this should only happen on a successful login -> this needs to move to the fetch call
      this.$router.push({ name: 'UserSelect' }) 

      //mock up the login functionality -> form data is a virtual <form> element's data
      /*let formData = new FormData();

      formData.append("username", this.username);
      formData.appened("password", this.password);

      //pass the form data to out login API (we dont know what this will be yet. nicks class is foing it.)
      let url = 'someloginurl';

      fetch(url, {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => console.table(data))
      .catch(err => console.error(err)); */
    }
  }


}
</script>

<style lang="scss">
  @import "@/assets/sass/login.scss";
</style>
