import React from "react";
import ChildComponent from "./ChildComponent";

class ShowComponent extends React.Component {
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
