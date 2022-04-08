<template>
  <section class="container">
    <div class="jumbotron">
        <h1>Welcome to Flashblack!</h1>
        <p class="lead">
        Before revisiting your favourite movies, tv shows or music from yesteryear, please log in with a valid username and password.
        </p>
    </div>

    <h2 class="login-flash" v-if="signup">{{ flash }}</h2>
    <h2 class="login-flash" v-if="errors">{{ flash }}</h2>

    <section class="log-in">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input v-model="username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>

      <label class="sr-only" for="inlineFormPassword">Name</label>
      <input v-model="password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
    </section>

    <button
      v-if="signup"
        type="submit" 
        class="btn btn-primary login-submit signup"
        @click="trySignup"
      >Sign Up
    </button>

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
      password: '',
      url: '/users/getone',
      flash: '',
      signup: false,
      errors: false,
    }
  },

  methods: {
    trylogin() {
      this.url = 'users/getone';
      this.login();
    },

    goToUsers(time, vm) {
      setTimeout(function() {
        // redirect to the UserSelect view
        vm.$router.push({ name: 'UserSelect'});
      }, time);
    },

    trySignup() {
      this.url = 'users/signup';
      this.login();
    },

    login() { 

    let formData = { username: this.username, password: this.password };

    //let url = this.url;

    fetch(this.url, {
      method: 'POST',
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        // this is the result from the /users/getine router handler
        console.table(data);

        //switch statement is an alternate if else
        switch (data.action) {
          // username isn't in the database
          case 'add':
            this.signup = true;
            this.username = '';
            this.password = '';
            this.flash = 'Username does not exist. Do yo want to sign up?';
            break;

          case 'added':
            this.flash = 'Added you to Roku Flashback! Enjoy! ... redirecting ...';
            this.goToUsers(2500, this);
            break;


          //wrong password
          case 'retry':
            document.querySelector(`input[type=${data.field}]`).classList.add('error');
            this.errors = true;
            this.flash = "Loging info incorrect, Please retry";
            break;

            default: 
              this.goToUsers(0, this);
              //this.$router.push({name: 'UserSelect'});
        }
      })
      .catch( err => console.error(err));
    }
  }

}
</script>

<style lang="scss">
  @import "@/assets/sass/login.scss";
</style>
