import React from "react";
import { endpoint } from "../api";

class ListComponent extends React.Component {
  state = {
    showPosts: false,
    posts: []
  }

  handleToggle = () => this.setState({ showPosts: !this.state.showPosts })

  handleFetch = async () => {
    try {
      const response = await fetch(endpoint + '/posts', {
        method: 'GET'
      })
      const responseJSON = await response.json()
      this.setState({ posts: responseJSON })
      console.log(responseJSON)
    } catch (error) {
      console.error(error)
    }
  }

  componentDidMount() {
    this.handleFetch()
  }

  render() {
    const { posts, showPosts } = this.state
    return (
      <div>
        <button onClick={this.handleToggle}>{showPosts ? 'Hide' : 'Show'}</button>
        <div style={{ display: showPosts ? 'block' : 'none' }}>
          {posts.map(item => (
            <div key={item.id}>{item.postTopic} - {item.postData}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default ListComponent;
