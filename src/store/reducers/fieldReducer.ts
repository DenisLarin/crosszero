import {Action} from "redux";
import {MAKE_MOVE} from "../actions/actionTypes";

interface fieldReducer {
    x: number[];
    y: number[];
    isWinner: string;
}

const initState: fieldReducer = {
    x: [],
    y: [],
    isWinner: "null"
};

const makeMove = (state: fieldReducer, action: any)=> {
    return state;
};

const reducer = (state=initState, action: any)=>{
    switch (action.type) {
        case MAKE_MOVE:
            return makeMove(state, action.move);
        default:
            return state;
    }
};

export default reducer;