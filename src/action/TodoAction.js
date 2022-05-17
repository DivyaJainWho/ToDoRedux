export const AddTodoaction = (todo) => (dispatch, getState) =>{
    const { Todo: {todos}} = getState();

    const hastodo = todos.find((i) => i.todo === todo)

    if(!hastodo && todo !=="")
    {
        dispatch({
            type: "ADD_TODO",
            payload: [{id:todo, todo},...todos]
        })
    }
}

export const RemoveTodoAction = (todo) =>(dispatch, getState)=>{
    const { Todo: {todos}} = getState();

    dispatch({
        type: "DELETE_TODO",
        payload: todos.filter((t) => t.todo !== todo.todo)
    })
}