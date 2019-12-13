import React, {Component} from 'react';
import {makeMove} from './../../store/actions/fieldActions'
import {Move} from "../../models/Move";
import {connect} from "react-redux";
import {fieldReducer} from "../../models/FieldReducerModel";
import Cross from "../cross/Cross";
import Zero from "../zero/Zero";


interface IProps {
    x: number;
    y: number;
    makeMove: (move: Move) => void;
    currentStep: string;
}
interface IState {
    clickedFigure: string
}
class FieldItem extends Component<IProps, IState> {
    state = {
        clickedFigure: "",
    }
    click = () => {
        this.setState({
            clickedFigure: this.props.currentStep
        })
        this.props.makeMove({x: this.props.x, y: this.props.y});
    };

    shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any): boolean {
        if (this.state.clickedFigure !== nextState.clickedFigure){
            return true;
        }
        return  false;
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        console.log("item")
        return (
            <span onClick={this.click} style={{
                cursor: "pointer",
                width: "20px",
                height: "20px",
                border: "1px solid #cacaca",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            {this.state.clickedFigure ? this.state.clickedFigure === "Крестик" ? <Cross/> : <Zero/> : null}
        </span>
        );
    }


};
const mapStateToProps = (state: fieldReducer) => {
    return {
        currentStep: state.currentStep
    }
};
const mapDispathToProps = (dispatch: any) => {
    return {
        makeMove: (move: Move) => dispatch(makeMove(move))
    }
}
export default connect(mapStateToProps, mapDispathToProps)(FieldItem);