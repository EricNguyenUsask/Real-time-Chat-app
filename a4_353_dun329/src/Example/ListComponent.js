import React from "react";

class ListComponent extends React.Component {
  //re-render
  state = {
    showPosts: false,
  };

  handleShowHide = () => {
    // if (!this.state.showPosts) {
    //   fetch("http://localhost:3000/posts", {
    //     method: "GET",
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       this.setState({ posts: data });
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching posts:", error);
    //     });
    // }
    this.setState({
      showPosts: !this.state.showPosts,
    });
  };

  render() {
    let { arrPost } = this.props;
    let { showPosts } = this.state;
    let check = showPosts === true ? "showPosts = true" : "showPosts = false";
    console.log(">>> check conditional: ", check);
    return (
      <>
        {showPosts === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="post-lists">
              {arrPost.map((item, index) => {
                return (
                  <div key={item.postID}>
                    {item.postTopic} - {item.postData}
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ListComponent;
