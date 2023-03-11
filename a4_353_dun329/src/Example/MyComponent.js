
import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {


    //key:value
    state = {
        arrPost: [
        ]
    }


    addNewPost = (post) => {
        this.setState({
            arrPost: [...this.state.arrPost, post]
        })

    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewPost={this.addNewPost}
                />


                <ChildComponent
                    arrPost={this.state.arrPost}
                />


            </>
        )

    }
}

export default MyComponent;