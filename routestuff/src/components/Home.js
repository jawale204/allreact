import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends Component {
    // state = {
    //   posts: []
    // }
    // componentDidMount(){
    //   axios.get('https://jsonplaceholder.typicode.com/posts/')
    //     .then(res => {
    //       console.log(res);
    //       this.setState({
    //         posts: res.data.slice(0,10)
    //       });
    //     })
    // }
   
    render(){
      const { posts } = this.props
      const postList = posts.length ? (
        posts.map(post => {
          return (
            <div className="post card" key={post.id}>
              <div className="card-content">
                <NavLink to={'/' + post.id}>
                  <span className="card-title red-text">{post.title}</span>
                </NavLink>
                <p>{post.body}</p>
              </div>
            </div>
          )
        })
      ) : (
        <div className="center">No posts to show</div>
      );
  
      return (
        <div>
          <div className="container">
            <h4 className="center">Home</h4>
            {postList}
          </div>
        </div>
      )
    }
  }
  
  const mapStateToProp=(state)=>{
    return (
      {
        posts: state.posts
      }
    )
  }

  export default connect(mapStateToProp)(Home);
