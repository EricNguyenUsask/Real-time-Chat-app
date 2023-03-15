import React from "react";
import ListComponent from "./ListComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  //key:value
  state = {
    arrPost: [],
  };

  addNewPost = (post) => {
    this.setState({
      arrPost: [...this.state.arrPost, post],
    });
  };

  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        <AddComponent addNewPost={this.addNewPost} />

        <ListComponent arrPost={this.state.arrPost} />
      </>
    );
  }
}

export default MyComponent;
