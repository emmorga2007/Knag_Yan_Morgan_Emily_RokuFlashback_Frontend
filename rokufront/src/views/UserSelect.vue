<template>
    <section class="users">
        <h1 class="users-headline text-center">Who's using Roku?</h1>

        <section class="users-container">
            <!-- Create a user component for every user here. -->
            <User class="user-panel"
                v-for="user in users"
                :key="user.id"
                :user="user"
            ></User>
        </section>
        
    </section>
</template>


<script>
import User from "@/components/User.vue"

export default {
    name: 'TheUsersView',

    created() {
        fetch('/users/getall')
            .then(res => res.json())
            .then(data => { 
                console.log(data);
                this.users = data;
            })
        .catch(err => console.error(err));

    },

    data() {
        return {
            users: []
        }
    },

    components: {
        User
    }
}
</script>


<style lang="scss">
    @import "@/assets/sass/userselect.scss";
</style>