import { ADD_QUESTION, RECEIVE_QUESTIONS , ADD_ANSWER} from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }

      case ADD_QUESTION :


  
        return {
          ...state,
          [action.question.id]: action.question,

        }

        case ADD_ANSWER :
        
    const id = action.qid
    const answer = action.answer
    let mySet = new Set([...state[id][answer].votes,action.authedUser.id])
    let votes = Array.from(mySet)
          return {
            ...state,
           [action.qid]:{
             ...state[id],
            [action.answer]:{
              ...state[id][answer],
              text:state[id][answer].text,
              votes:votes
            }
          }
          }

    default :
      return state
  } 
}