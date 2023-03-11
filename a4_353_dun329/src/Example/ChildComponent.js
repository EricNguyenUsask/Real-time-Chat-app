import React from 'react';

class ChildComponent extends React.Component {
    //re-render
    state = {
        showPosts: false
    }

    handleShowHide = () => {
        this.setState({
            showPosts: !this.state.showPosts
        })
    }
    render() {
        let { arrPost } = this.props;
        let { showPosts } = this.state;
        let check = showPosts === true ? 'showPosts = true' : 'showPosts = false';
        console.log('>>> check conditional: ', check)
        return (
            <>
                {showPosts === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="post-lists">
                            {
                                arrPost.map((item, index) => {
                                    return (
                                        <div key={item.postID}>
                                            {item.postTopic} - {item.postData}
                                        </div>
                                    )
                                })

                            }

                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )

    }
}


export default ChildComponent;