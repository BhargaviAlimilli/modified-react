import { combineReducers } from "redux";
import frozen from "./frozen";
import produce from "./produce";
import meat from './meat'

const rootRed= combineReducers({
    frozenReducer: frozen,
    produceReducer: produce,
    meatReducer: meat
})

export default rootRed

