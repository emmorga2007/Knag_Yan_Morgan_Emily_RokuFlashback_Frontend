<template>
  <section class="container">
    <div class="loginHeader">
        <img src="@/assets/images/roku.svg" alt="Roku logo">
        <h1 class="lead">
        Favourites From The Past
        </h1>
        <p>Please log in with a valid username and password.</p>
    </div> 

    <h2 class="login-flash" v-if="signup">{{ flash }}</h2>
    <h2 class="login-flash" v-if="errors">{{ flash }}</h2>

    <section class="log-in">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input v-model="username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>
      <!-- v-model takes input and store them in data{} -->
      <label class="sr-only" for="inlineFormPassword">Name</label>
      <input v-model="password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
    </section>

    <button
        v-if="signup"
        type="submit" 
        class="btn btn-primary login-submit signup"
        @click="trySignup" 
    >Sign up
    </button>

    <button
        type="submit" 
        class="btn btn-primary login-submit"
        @click="tryLogin" 
      >Enter
    </button>
    <!-- when click on the btn, call tryLogin method -->
  </section>
</template>

<script>
export default {
  name: 'TheLogin',

  data() {
    return {
      username: '',
      password: '',
      url: 'users/getone',
      flash: '',
      signup: false,
      errors: false
    }
  },

  methods: {

    tryLogin() {
      this.url = 'users/getone';
      this.login();
    },

    trySignup() {
      this.url = 'users/signup';
      this.login();
    },

    goToUsers(time, vm) {
      setTimeout(function() {
        // setauth is a custom event works in app.vue
        vm.$emit('setauth', true);
        vm.$router.push({ name: 'UserSelect'});
      }, time);
    },


    login() {
      let formData = { username: this.username, password: this.password};

      // fetch call
      fetch(this.url, {
        method: 'POST',
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then(res => res.json())
        .then(data => {
          console.table(data);

          switch (data.action) {
            case 'add':
              this.signup = true;
              this.username = '';
              this.password = '';
              this.flash = `Hmmm... your username doesn't seem to exist. Do you want to sign up? Or you can try again.`;
              break;

            case 'added':
              this.flash = 'Added you to Roku Flashback! Enjoy! ... redirecting ...';
              this.goToUsers(2500, this);
              break;

            case 'retry':
              document.querySelector(`input[type=${data.field}]`).classList.add('error');
              this.errors = true;
              this.flash = "login info incorrect";
              break;

            default:
              this.goToUsers(0, this);
              //this.$router.push({ name: 'UserSelect'});
          }
        })
      .catch(err => console.error(err));

    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/login.scss";
</style>
