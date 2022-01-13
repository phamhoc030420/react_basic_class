import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyForm extends React.Component {
    state = {
        arrJob: [
            { id: 'Job1', title: 'Developers', salary: '500' },
            { id: 'Job2', title: 'Testter', salary: '400' },
            { id: 'Job3', title: 'Manager', salary: '1000' }
        ]
    }
    addNewJob = (job) => {

        this.setState({
            arrJob: [...this.state.arrJob, job]
        })

    }
    deleteJob = (job) => {
        let current = this.state.arrJob;
        current = current.filter(item => item.id != job.id)
        this.setState({
            arrJob: current
        })
    }
    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJob={this.state.arrJob}
                    deleteJob={this.deleteJob}
                />


            </>
        )
    }
}
export default MyForm