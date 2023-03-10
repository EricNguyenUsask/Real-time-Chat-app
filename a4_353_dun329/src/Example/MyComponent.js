import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {


    //key:value
    state = {
        arrJobs: [
        ]
    }


    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })

    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />


                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />


            </>
        )

    }
}

export default MyComponent;