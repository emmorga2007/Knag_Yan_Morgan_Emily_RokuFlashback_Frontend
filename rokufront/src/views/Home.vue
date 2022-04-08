<template>
    <section>
        <!--Custom movie component goes here -->
        <section class="movie-container">
            <MovieData
                :movies_title="currentMovie.movies_title"
                :movies_storyline="currentMovie.movies_storyline"
                :movies_runtime="currentMovie.movies_runtime"
                :movies_year="currentMovie.movies_year"
            ></MovieData>
            
            <MoviePlayer
            :movies_trailer="currentMovie.movies_trailer"
            ></MoviePlayer>

        </section>
        <!--show the list of movies retrieved.  -->

        <section class="movie-thumbs">
            <MovieThumb
                v-for="movie in movies"
                :key="movie.movies_id"
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
    name: "TheUserHomePage", 

    props: {
        first_name: String,
        role: String,
        premissions: String, 
        avatar: String
    },

    created(){
        fetch('/movies')
            .then(res => res.json())
            .then(data => { 
                console.log(data);
                // store all the movies in the vue instance
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
        MovieThumb,
    }
}
</script>

<style lang="scss">
    @import "@/assets/sass/homepage.scss";
</style>
