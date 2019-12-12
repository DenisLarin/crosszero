import {Move} from "../../models/Move";
import {Action, ActionCreator} from "redux";
import {MAKE_MOVE} from "./actionTypes";

export const makeMove : ActionCreator<Action> = (move: Move) =>{
    return{
        type: MAKE_MOVE,
        move
    }
};