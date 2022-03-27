<template>
  <section class="app-wrapper">
    <header class="col-sm-12 roku-header">
      <img src="@/assets/images/roku.svg" alt="Roku logo" width="150"><span>FlashBack</span>
      <nav class="float-right">
      <!-- <ul>            
        <li><i class="fas fa-user-circle"></i></li>
        <li><i class="fas fa-cog"></i></li>
        <li><i class="fas fa-power-off"></i></li>					
      </ul> -->
      </nav>
    </header>

    <router-view></router-view>
  </section>
</template>

<style lang="scss">
  @import "@/assets/sass/main.scss";
</style>
