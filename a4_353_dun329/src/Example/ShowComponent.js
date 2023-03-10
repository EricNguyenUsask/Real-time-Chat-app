import React from 'react';
import ChildComponent from './ChildComponent';

class ShowComponent extends React.Component {

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
        return (
            <>
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
        )

    }
}


export default ShowComponent;