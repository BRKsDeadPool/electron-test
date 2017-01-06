<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<template>
  <div>
    <div class="row">
      <div class="col s12 m12 l12">
        <div class="container">
          <h3 class="md-subheading capitalize">o que deseja fazer ?</h3>
          <ul>
            <li><router-link :to="{name: 'tasks'}">Ver Tarefas</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>