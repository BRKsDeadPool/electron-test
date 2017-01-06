<script>
export default{
  data(){
    return{
      msg:'hello vue'
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <md-button id="createTodo" @click="$refs('createTodo').open()" class="md-fab md-primary" style="position: absolute; bottom: 20px; right: 20px;">
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>