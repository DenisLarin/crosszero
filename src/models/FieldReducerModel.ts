import {Move} from "./Move";

export interface fieldReducer {
    x: Move[];
    y: Move[];
    isWinner: string;
    currentStep: string;
}