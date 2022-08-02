import { Component } from "react";

// Ini yang nyimpen logicnya
const UpdateComponent = OriginalComponent => {
    class NewComponent extends Component{
        constructor(props){
            super(props);
            this.state = {
                count : 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return {count : prevState.count + 1}
            })
            // this.setState({
            //     count : this.state.count + 1
            // })
        }

        render(){
            return(
                // <OriginalComponent name = 'This is HOC'/>
                <OriginalComponent count = {this.state.count} incrementCount = {this.incrementCount} />
            );
        }
    }
    return NewComponent
}

export default UpdateComponent;