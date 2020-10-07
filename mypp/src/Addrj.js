import React,{Component} from "react"

class AddRj extends Component{
    state={
        name: null,
        age:null,
        king: null
    }
    handleChange=(e)=>{
      this.setState({
          [e.target.id]:e.target.value
      })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addRjList(this.state);
    }
    render(){
      return(
              <div className="Add-rj">
                  <form onSubmit={this.handleSubmit}>
                  <label htmlFor="name" >Name: </label>
                  <input type="text" id="name" onChange={this.handleChange}></input>
                  <label htmlFor="name" >age: </label>
                  <input type="text" id="age" onChange={this.handleChange}></input>
                  <label htmlFor="king" >king: </label>
                  <input type="text" id="king" onChange={this.handleChange}></input>
                  <button>Submit</button>
                  </form>
              </div>
   )
  }
}
export default AddRj