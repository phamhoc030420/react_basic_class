import React from "react";
import './Demo.scss'
class ChildComponent extends React.Component {
    state = {
        showJob: false
    }
    hamthaydoi = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    handerleOnclickDelete = (item) => {
        this.props.deleteJob(item)
    }
    render() {
        let { showJob } = this.state;
        let { arrJob } = this.props;
        let check = showJob === true ? 'showJob = true' : 'showjob = false';
        console.log("Bien Check" + check);
        return (
            <>
                {showJob === false ?
                    <div><button className="btn-show" onClick={() => this.hamthaydoi()}>Show</button></div>

                    :
                    <>
                        <div className="job-list">
                            {
                                arrJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title}-{item.salary} $ <></> <span className="del" onClick={() => this.handerleOnclickDelete(item)}>X</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button className="btn-show" onClick={() => this.hamthaydoi()}>Hiden</button></div>
                    </>
                }
            </>
        )


    }
}

// function component
// const ChildComponent = (props) => {
//     let { arrJob } = props;
//     return (
//         <>
//             <div >
//                 {
//                     arrJob.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title}-{item.salary} $
//                                 </div>
//                             )
//                         }

//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent