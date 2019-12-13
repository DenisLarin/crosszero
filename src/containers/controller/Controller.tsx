import React, {Component} from 'react';
import css from './controller.module.scss';
import {connect} from "react-redux";
import {fieldReducer} from "../../models/FieldReducerModel";


interface IProps {
    currentStep: string;
}
class Controller extends Component <IProps,{}> {
    render() {
        return (
            <div className={css.controller}>
                Текущий ход: {this.props.currentStep}
            </div>
        );
    }
}

const mapStateToProps = (state: fieldReducer)=>{
    return{
        currentStep: state.currentStep
    }
};

export default connect(mapStateToProps)(Controller);