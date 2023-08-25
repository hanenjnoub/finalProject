import { Get_Medcontact,REGISTER_USER,LOGIN_USER,LOGOUT_USER,AUTH_ERRORS,GET_AUTH_USER } from "./actiontype";
const initState={
    medcontacts:[],
    token:localStorage.getItem('token'),
    user:null,
   msg:null
}
export  const medReducer=(state=initState,{type,payload})=>{
    switch(type){
        case Get_Medcontact:
            return{
                ...state,
                medcontacts:payload.contacts,
                msg:payload.msg
                
            };
            case LOGIN_USER:
                case REGISTER_USER:
    localStorage.setItem("token",payload.token)
    return{
        ...state,
        user:payload.user,
        msg:payload.msg,
     
    }
    case GET_AUTH_USER:
    return{
        ...state,
        user:payload.user,
        msg:payload.msg
    }
    case LOGOUT_USER:
        localStorage.removeItem("token")
        return{
            ...state,
            token:null,
            user:null
        }
            default:
                return state
    }
    }