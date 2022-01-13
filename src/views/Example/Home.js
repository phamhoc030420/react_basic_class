import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/ronaldo.jpg'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom';
class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
    }
    handlerDeleteUser = (user) => {
        console.log("Xoa", user)
        this.props.deleteUserRedux(user);
    }
    handlerAddUser = () => {
        this.props.addUserRedux();
    }
    render() {
        console.log("check props: ", this, this.props.dataRedux);
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>Hello Word From Home</div>
                <div><img src={logo} /></div>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (

                            <>
                                <div key={item.id}>
                                    {index + 1} {item.name} <span onClick={() => this.handlerDeleteUser(item)} style={{ cursor: "pointer" }}> X </span>

                                </div>

                            </>
                        )
                    })
                }
                <button type="button" style={{ cursor: "pointer" }} onClick={() => this.handlerAddUser()}>Add New</button>
            </>

        )
    }
}
// export default withRouter(Home);
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));