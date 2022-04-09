<template>
<!-- canplaythrough is a built-in event -->
    <video controls muted
        :src="require('@/assets/video/' + movies_trailer)"
        @canplaythrough="playVideo"
    ></video>
</template>

<script>
export default {
    name: "TheVideoPlayer",

    props: {
        movies_trailer: String
    },

    methods: {
        playVideo(event) {
            event.currentTarget.muted = false;
            event.currentTarget.play();
        }
    }
}
</script>