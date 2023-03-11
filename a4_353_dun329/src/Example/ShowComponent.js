import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class ShowComponent extends AddComponent {
  state = {
    arrPost: [],
  };
  addNewPost = (post) => {
    this.setState({
      arrPost: [...this.state.arrPost, post],
    });
  };

  render() {
    return (
      <>
        <ChildComponent arrPost={this.state.arrPost} />
      </>
    );
  }
}

export default ShowComponent;
