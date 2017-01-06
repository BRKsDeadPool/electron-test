export default {
    todos (state) {
        return state.todos
    },
    completedTodos (state) {
        return state.todos.filter((todo) => {
            return todo.status == 'completed'
        })
    },
    pendingTodos (state) {
        return state.todos.filter((todo) => {
            return todo.status == 'pending'
        })
    },
    canceledTodos (state) {
        return state.todos.filter((todo) => {
            return todo.status == 'canceled'
        })
    },
    persistedTodos (state) {
        return state.todos.filter(todo => {
            return todo.persisted
        })
    }
}