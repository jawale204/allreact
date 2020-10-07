import React from "react"

const TodoList =({todolist,deleteToList })=>{

    const todo= todolist.length ? todolist.map(
      item=>{
          return (
              <div className="collection-item" key={item.id}>
                   <span onClick={()=>{deleteToList(item.id)}} >{item.content}</span>
              </div>
         
          )
      }
    ): <p className="center">"bro you have nothing on the list"</p>;
    return(
        <div className="todo collection">
            {todo}
        </div>
    )
}

export default TodoList