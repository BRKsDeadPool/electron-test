export default {
    ADD_TODO (state, payload) {
        payload.id = state.todos.length
        state.todos.push(payload)
    }
}