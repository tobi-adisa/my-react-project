import React from "react"

type ToDoItem = {
    id: number;
    taskName: string
}
export const TodoList = () => {
    const [toDoItems, setToDoItems] = React.useState <ToDoItem[]>([
        {id: 1, taskName: "Buy Groceries"},
        {id: 2, taskName: "Buy Car"},
        {id: 3, taskName: "Deliver Package"},
        {id: 4, taskName: "Send Email"}

    ])

    function deleteToDo(id: number){
        const updatedToDo = [...toDoItems];
        const foundIndex = updatedToDo.findIndex(toDoItem => toDoItem.id == id)
        updatedToDo.splice(foundIndex,1)
        setToDoItems(updatedToDo)
    }
    return (
        <div className="main-card">
            <div className="title">
                <h2>To-do List</h2>
            </div>
            <div className="to-do-list">
            <ul>
                {toDoItems.map((todo) => (
                    <li key={todo.id}>
                        {todo.taskName}
                        <button onClick= {() => deleteToDo(todo.id)}>Delete</button>
                    </li>
                )

                )}
            </ul>
            </div>
        </div>
    )

}