import { Component } from "react";
import UpdateComponent from '../shared/WithCounter';


class HoverCounter extends Component{
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
                {/* <h2 onMouseOver={this.incrementCount}>{this.props.name} Hover {count} Times</h2> */}
                <h2 onMouseOver={incrementCount}>Hover {count} Times</h2>
            </div>
        )
    }
}

export default UpdateComponent(HoverCounter);