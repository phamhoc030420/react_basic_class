import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import './ListUser.scss'
class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
            // console.log("Lats: ", this.state.user);
        }

    }
    back = () => {
        this.props.history.push('/user');
    }
    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <>
                <div className="list-user-container">
                    <div className="list-user-content">
                        {isEmptyObj === false &&
                            <>
                                <div> User name: {user.first_name} {user.last_name}</div>
                                <div> Email: {user.email}</div>
                                <div><img src={user.avatar} /></div>

                            </>
                        }
                    </div>
                </div>
                <button type="button" onClick={() => this.back()}>Back</button>
            </>
        )
    }
}
export default withRouter(DetailUser);