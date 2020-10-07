import React from 'react';
import Todolist from './List'
import Addtodo from './Addtodo'

class App extends React.Component {
  state={
    todolist:[
      {id: 1,content :" bitch do your own work"},
      {id: 2,content :" workout you ugly ass fat bitch"}
    ]
  }

  deleteToList =(id)=>{
  console.log(id);
  let todolist=this.state.todolist.filter(
    item=>{
      return item.id !== id
    } );
  this.setState({
    todolist:todolist
  })
  }
 addtodo=(todo)=>{
   todo.id=Math.random();
   let todolist= [...this.state.todolist,todo]
   this.setState({
     todolist
   })
 }

  render(){
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
        <Todolist todolist={this.state.todolist} deleteToList ={this.deleteToList }/>
        <Addtodo addtodo={this.addtodo}/>
      </div>
    );
  }
 
}

export default App;
