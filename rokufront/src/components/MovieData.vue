
<template>
    <article class="text-wrapper">
        <h1>{{movies_title}}</h1>
        <p>{{movies_storyline}}</p>
        <div class="release-details">
            <h4>Released: {{movies_year}}</h4>
            <h4>Runtime: {{movies_runtime}}</h4>
        </div>
    </article>
</template>

<script>
export default {
    name: "TheMovieData",

    props: {
        movies_title: String,
        movies_storyline: String,
        movies_runtime: String,
        movies_year: String
    }
}
</script>

<style lang="scss">
    @import "@/assets/sass/movietext.scss";
</style>