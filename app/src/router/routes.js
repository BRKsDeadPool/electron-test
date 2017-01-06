export default [
    {path: '/', component: require('../pages/Home.vue'), name: 'home'},
    {path: '/tasks', component: require('../pages/Tasks.vue'), name: 'tasks'},
    {path: '*', redirect: {name: 'home'}}
]