<script>
import { mapGetters } from 'vuex'
import todo from '../components/Task.vue'
import createTodo from '../components/createTodo.vue'
export default{
  data(){
    return{

    }
  },
  computed: {

    ...mapGetters({
      todos: 'todos',
      completedTodos: 'completedTodos',
      pendingTodos: 'pendingTodos',
      canceledTodos: 'canceledTodos'
    })
  },
  components: {
    todo,
    'create-todo': createTodo
  }
}
</script>

<style>

</style>

<template>
  <div>
    <div class="row">
      <div class="col s12 m6 l4">
        <h1 class="md-title">Tarefas pendentes</h1>
        <div class="row">
          <md-whiteframe md-elevation="2">
            <div class="col s12 m12 l12" style="max-height: 500px; overflow-y: auto">
              <md-list v-if="pendingTodos.length != 0">
                <todo v-for="todo in pendingTodos" :id="todo.id"></todo>
              </md-list>
              <md-list v-else>
                <md-list-item>Não há tarefas pendentes!</md-list-item>
              </md-list>
            </div>
          </md-whiteframe>
        </div>
      </div>
      <div class="col s12 m6 l4">
        <h1 class="md-title">Tarefas completadas</h1>
        <div class="row">
          <md-whiteframe md-elevation="2">
            <div class="col s12 m12 l12" style="max-height: 500px; overflow-y: auto">
              <md-list v-if="completedTodos.length != 0">
                <todo v-for="todo in completedTodos" :id="todo.id"></todo>
              </md-list>
              <md-list v-else>
                <md-list-item>Não há tarefas completadas!</md-list-item>
              </md-list>
            </div>
          </md-whiteframe>
        </div>
      </div>
      <div class="col s12 m6 l4">
        <h1 class="md-title">Tarefas canceladas</h1>
        <div class="row">
          <md-whiteframe md-elevation="2">
            <div class="col s12 m12 l12" style="max-height: 500px; overflow-y: auto">
              <md-list v-if="canceledTodos.length != 0">
                <todo v-for="todo in canceledTodos" :id="todo.id"></todo>
              </md-list>
              <md-list v-else>
                <md-list-item>Não há tarefas em canceladas!</md-list-item>
              </md-list>
            </div>
          </md-whiteframe>
        </div>
      </div>
    </div>
    <create-todo></create-todo>
  </div>
</template>