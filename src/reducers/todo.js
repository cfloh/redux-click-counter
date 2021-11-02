let initialState = [
    {id: 5, title: "Hallo Welt!"},
    {id: 10, title: "Hallo Österreich!"}
]

function todos(state = initialState, action) {
    if (action.type === "TODO_ADD") {
        let newState = []
        for(let todo of state) {
            newState.push(todo)
        }
        let maxTodoId = 0;
        for(let todo of state) {
            if (todo.id > maxTodoId) {
                maxTodoId = todo.id;
            }
        }
        return [].concat(state, [
            {id: maxTodoId + 1, title: action.title}
        ])
        
    }
    return state;
}

export default todos;