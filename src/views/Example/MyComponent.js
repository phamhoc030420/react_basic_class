import React from "react";
// JSX return ve block
class MyComponent extends React.Component {
    //    state la nhung thay doi tren view ma no cap nhat thay doi do ma ko load lai trang
    state = {
        name: '',
        age: 21
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    myfun = () => {
        alert("Hello");
    }
    render() {
        return (
            // day la fragment cua React ko phai the html
            <>
                <div className="firt">

                    <input value={this.state.name} type='text'
                        onChange={(event) => {
                            this.handleOnChangeName(event)
                        }}
                    />
                    My Name is {this.state.name}
                </div>
                <div className="second">
                    So Tuoi la {this.state.age}
                </div>
                <div className="third">
                    <button onClick={() => this.myfun()}>Click Me</button>
                </div>

            </>

        )
    }
}
export default MyComponent;