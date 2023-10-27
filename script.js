new Vue({
    el: "#app",
    data: {
        newTask: '',
        todos: [],
    },
    methods:  {
        addNewTask: function() {
            this.todos.push(this.newTask);
            this.newTask = '';
        },
        removeTask: function(index) {
            this.todos.splice(index, 1);
        }
    },
})