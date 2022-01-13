import React from "react";
class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    submit = () => {
        if (!this.state.title || !this.state.salary) {
            alert("Vui long dien vao");
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })

    }
    sukienfirt = (event) => {
        this.setState({
            title: event.target.value
        });
    }
    sukienlast = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    render() {
        return (
            <>
                <form>
                    <label >Job title:</label><br />
                    <input type="text" value={this.state.title} onChange={(event) => { this.sukienfirt(event) }} /><br />
                    <label >salary:</label><br />
                    <input type="text" value={this.state.salary} onChange={(event) => { this.sukienlast(event) }} /><br /><br />
                    <input className="btn-show" type="button" value="Submit" onClick={() => { this.submit() }} />
                </form>
            </>
        )
    }
}
export default AddComponent;