import { Component } from "react";
import UpdateComponent from '../shared/WithCounter';

class ClickCounter extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         count : 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {count : prevState.count + 1}
    //     })
    // }

    render(){
        // const {count} = this.state 
        const {count, incrementCount} = this.props 
        return(
            <div>
                {/* <button onClick={this.incrementCount}>{this.props.name} Click {count} Times</button> */}
                <button onClick={incrementCount}>Click {count} Times</button>
            </div>
        )
    }
}

export default UpdateComponent(ClickCounter);