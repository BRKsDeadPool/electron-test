<script>
import { mapGetters } from 'vuex'
export default {
    props: [
        'id'
    ],
    computed: {
        todo() {
            this.todos.filter(todo => {
                return todo.id == this.id
            })
        },
        ...mapGetters({
            todos: 'todos'
        })
    }
}
</script>
<style lang="scss">

</style>
<template>
    <md-list-item>
        {{ todo }}
    </md-list-item>
</template>