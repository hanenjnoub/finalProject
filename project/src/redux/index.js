import { combineReducers } from "redux";
import {medReducer} from "./medreducer"
import  {Bookereducer} from "./Bookereducer"

 const rootReducer = combineReducers({
   medReducer,
   Bookereducer
});
export default rootReducer;