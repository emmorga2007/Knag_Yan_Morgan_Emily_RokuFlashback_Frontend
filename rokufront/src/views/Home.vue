<template>
    <section>
        <h1> Welcome {{ first_name }}!</h1>
        <!--Custom movie component goes here -->

        <!--show the list of movies retrieved.  -->

    </section>
</template>

<script>
export default {
    name: "TheUserHomePage", 

    props: {
        first_name: String,
        role: String,
        premissions: String, 
        avatar: String,
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
    }
}
</script>
