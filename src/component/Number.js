import { connect } from "react-redux";

const { Component } = require("react");
const { default: ActionType } = require("../redux/reducer/GlobalActionType");

class Number extends Component{
    render() {
        return (
            <div>
                {this.props.numb}
                <button>Plus</button>
                <button>Minus</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        numb : state.globalNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handlePlus : () => dispatch({type: ActionType.PLUS}),
        handleMinus : () => dispatch({type: ActionType.MINUS})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Number);