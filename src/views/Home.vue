<template>
    <section>

        <!-- custom movie component goes here - show the current selection -->
        <section class="movie-container">

          <div class="videoHeader">
            <MoviePlayer
              :movies_trailer="currentMovie.movies_trailer"
            ></MoviePlayer>
          </div>

          <div class="movieBio">
            <MovieData
              :movies_title="currentMovie.movies_title"
              :movies_storyline="currentMovie.movies_storyline"
              :movies_runtime="currentMovie.movies_runtime"
              :movies_year="currentMovie.movies_year"
            ></MovieData>
          </div>
          
        </section>

        <div class="movieQueryMessage">
          <h1>Top picks for {{ first_name }} :</h1>
        </div>
        <!-- show the list of movies retrieved -->
        <section class="movie-thumbs">
          <MovieThumb
            v-for="movie in movies"
            :key="movie.id"
            :thumb="movie.movies_cover"
            @click="setCurrentMovie(movie)"
          ></MovieThumb>
        </section>


    </section>
    
</template>

<script>
import MoviePlayer from "@/components/MoviePlayer.vue";
import MovieData from "@/components/MovieData.vue";
import MovieThumb from "@/components/MovieThumb.vue";

export default {
  name: 'TheUserHomePage',

  props: {
    first_name: String,
    role: String,
    permissions: String,
    avatar: String
  },

  created() {
    // store the active user in localStorage
    let currentUser = {
      first_name: this.first_name,
      role: this.role,
      permissions: this.permissions,
      avatar: this.avatar
    }

    if (window.localStorage) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    


    // get data from API
    fetch(`/movies?rating_id=${this.permissions}`)
        .then(res => res.json())
        .then(data => { 
            console.log(data);
            // store all the movies in the Vue instance
            this.movies = data[0];
            // pick a movie at random and show it
            this.currentMovie = data[0][Math.floor(Math.random() * data[0].length)];
        })
      .catch(err => console.error(err));
  },

  data() {
    return {
      movies: [],
      currentMovie: {}
    }
  },

  methods: {
    setCurrentMovie(movie) {
      this.currentMovie = movie;
    }
  },

  components: {
    MoviePlayer,
    MovieData,
    MovieThumb
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/homepage.scss"
</style>
