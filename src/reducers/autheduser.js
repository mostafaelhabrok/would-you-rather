import {LOGIN , LOGOUT} from "../actions/autheduser"

export default function authedUser (state={},action) {
    switch(action.type) {
        case LOGIN :
            return {
                ...state,
                ...action.autheduser
            }
        case LOGOUT :
            return {
                
            }
        default :
            return state
    }
}