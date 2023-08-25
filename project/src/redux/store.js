import { createStore,applyMiddleware,  } from "redux"

import {medReducer} from "./medreducer"
//import {Bookereducer} from "./Bookereducer"
import rootReducer from"./index"
import{composeWithDevTools}from "redux-devtools-extension"
import thunk from "redux-thunk"
const middelware=[thunk]
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(...middelware)))
export default store








