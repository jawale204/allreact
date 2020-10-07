import React,{Component} from "react"

class Addtodo extends Component{
    state={
       content:""
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state)
        this.setState(
            {
                content:""
            }
        )
    }
    handleChange=(e)=>{
        this.setState({
           content:e.target.value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Add to Todo List</label>
                <input type="text" name="content" onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>
        )
    }
    
}
export default Addtodo