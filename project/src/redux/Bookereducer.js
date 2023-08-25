import { Addbooking } from "./actiontype"

const initState={
    booking :null
}

export  const  Bookereducer=(state=initState,action)=>{
    switch(action.type){
        case Addbooking:
            return{

            ...state,
            booking:action.payload.booking
        }
        default:
            return state
    }
}