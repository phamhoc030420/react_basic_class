import React from "react";
import { ToastContainer, toast } from 'react-toastify';
class AddToDo extends React.Component {
    state = {
        title: ''
    }
    handleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleClick = () => {
        if (!this.state.title) {
            toast.error("Input rong!");
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState(
            {
                title: ''
            }
        )
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnchangeTitle(event)}
                />
                <button type="button" className="btn"
                    onClick={() => this.handleClick()}
                >Add</button>
            </div>
        )
    }
}
export default AddToDo;
