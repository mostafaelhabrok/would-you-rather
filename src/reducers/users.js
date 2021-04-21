import { RECEIVE_USERS } from '../actions/users'
import {ADD_QUESTION,ADD_ANSWER} from '../actions/questions'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }

    case ADD_QUESTION :

  const user = action.authedUser.id
      return {
          ...state,
          [user]: {
            ...state[user],
            questions: state[user].questions.concat([action.question.id])
          }
        }

        case ADD_ANSWER :
        
          const answer = action.answer
          const authed = action.authedUser.id
                return {
                  ...state,
                 
                    [authed]:{
                      ...state[authed],
                      answers:{
                        ...state[authed].answers,
                        [action.qid]:answer
                      }
                    }
                }
    default :
      return state
  }
}