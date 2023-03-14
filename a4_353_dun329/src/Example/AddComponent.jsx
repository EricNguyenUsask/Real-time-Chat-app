import React from "react";
import { endpoint } from '../api'

class AddComponent extends React.Component {
  state = {
    postTopic: "",
    postData: "",
  }

  handleChange = (event, key) => this.setState({ ...this.state, [key]: event.target.value })

  handleClean = () => this.setState({ postTopic: '', postData: '' })

  handleSubmit = async (event) => {
    event.preventDefault()
    if (!this.state.postTopic || !this.state.postData) {
      alert("Missing required params");
      return;
    }

    const newPost = { ...this.state } // compose
    try {
      const response = await fetch(endpoint + '/posts', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      })
      const responseJSON = await response.json()
      this.handleClean()
      console.log(responseJSON)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <form>
        <label htmlFor="fname">postTopic:</label>
        <br />
        <input
          type="text"
          value={this.state.postTopic}
          onChange={(event) => this.handleChange(event, 'postTopic')}
        />
        <br />
        <label htmlFor="lname">postData:</label>
        <br />
        <input
          type="text"
          value={this.state.postData}
          onChange={(event) => this.handleChange(event, 'postData')}
        />
        <br />
        <br />
        <input type="submit" onClick={(event) => this.handleSubmit(event)} />
      </form>
    );
  }
}

export default AddComponent;
