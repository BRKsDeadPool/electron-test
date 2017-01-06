<script>
  export default {

  }
</script>

<template>
  <div>
    <md-whiteframe md-elevation="3" class="md-fixed-top" style="z-index: 10">
      <md-toolbar>
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title" style="flex: 1">Job</h2>
      </md-toolbar>
    </md-whiteframe>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
