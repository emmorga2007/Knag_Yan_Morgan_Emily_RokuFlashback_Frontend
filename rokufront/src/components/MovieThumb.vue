<template>
    <div class="thumb-wrapper">
        <img :src="require('@/assets/images/video/' + thumb)" alt="">
    </div>
</template>

<script>

export default{
    name: "TheMovieThumb",

    props: {
        thumb: String
    }
}
</script>
