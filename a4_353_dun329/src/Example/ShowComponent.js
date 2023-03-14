import React from "react";
import AddComponent from "./AddComponent";
import ListComponent from "./ListComponent";

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
        <ListComponent arrPost={this.state.arrPost} />

      </>
    );
  }
}

export default ShowComponent;
