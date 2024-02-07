import globalReducer from "./globalReducer";
import myFirstReducer from "./sagaReducer";

import { combineReducers } from "redux"


const rootReducer = combineReducers(
    {globalReducer, myFirstReducer}
)

export default rootReducer