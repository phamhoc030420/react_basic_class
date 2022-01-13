import React from "react";
import './ListTodo.scss';
import AddToDo from "./AddToDo";
import { ToastContainer, toast } from 'react-toastify';
import Color from "../HOC/Color";
class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making Video' },
            { id: 'todo3', title: 'Fixings bugs' }
        ],
        editTodo: {}
    }
    addNewTodo = (item) => {
        this.setState({
            listTodos: [...this.state.listTodos, item]
        })
        toast.success("Them Thanh Cong!");
    }
    handlerDelete = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodo
        })
        toast.info("Delete thanh cong! ");
    }
    handlerEdit = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodos];
            let objindex = listTodoCopy.findIndex(item => item.id === todo.id);
            listTodoCopy[objindex].title = editTodo.title;
            this.setState({
                listTodos: listTodoCopy,
                editTodo: {}
            })
            toast.success("Update thanh cong! ")
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })


    }
    handlerChangeEditTodo = (event) => {
        let editCopy = { ...this.state.editTodo };
        editCopy.title = event.target.value;
        this.setState({
            editTodo: editCopy
        })
    }
    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log("Empty ", isEmptyObj);
        return (
            <>
                <p>
                    Simple ToDo Apps
                </p>
                <div className="list-todo-container">
                    <AddToDo addNewTodo={this.addNewTodo} />

                    <div className="list-todo-content">

                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1}-{item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>{index + 1}- <input type="text" value={editTodo.title} onChange={(event) => this.handlerChangeEditTodo(event)} /> </span>
                                                    :
                                                    <span>{index + 1}-{item.title}</span>
                                                }
                                            </>
                                        }

                                        <button className="btn btn1" onClick={() => this.handlerDelete(item)}>Delete</button>
                                        <button className="btn btn1" onClick={() => this.handlerEdit(item)} > <i class="fas fa-pen"></i>
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                <span>Save</span> : <span>Edit</span>
                                            }

                                        </button>

                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </>
        )
    }
}
export default Color(ListTodo);