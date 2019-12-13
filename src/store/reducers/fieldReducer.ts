import {Action} from "redux";
import {MAKE_MOVE} from "../actions/actionTypes";
import {fieldReducer} from "../../models/FieldReducerModel";
import {Move} from "../../models/Move";



const initState: fieldReducer = {
    x: [] as Move[],
    y: [] as Move[],
    isWinner: "null",
    currentStep: "Крестик"
};

const makeMove = (state: fieldReducer, move: Move)=> {
    const x = [...state.x];
    const y = [...state.y];
    let currentStep = state.currentStep;
    if (state.currentStep === "Крестик"){
        currentStep = "Нолик";
        x.push(move)
    }
    else{
        currentStep = "Крестик";
        y.push(move)
    }
    return {x: x, y: y, isWinner: null, currentStep: currentStep};
};

const reducer = (state=initState as fieldReducer, action: any)=>{
    switch (action.type) {
        case MAKE_MOVE:
            return makeMove(state, action.move);
        default:
            return state;
    }
};

export default reducer;