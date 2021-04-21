import { _saveQuestion , _saveQuestionAnswer} from '../utils/_DATA'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

function addQuestion (question,authedUser) {
  return {
    type: ADD_QUESTION,
    question,
    authedUser
  }
}

function addAnswer (authedUser, qid,answer) {
  return {
    type: ADD_ANSWER,
    authedUser, qid,answer
  }
}

export function handleAddQuestion (optionOneText,optionTwoText,author ) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    console.log(authedUser)
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author
    })
      .then((question) => {dispatch(addQuestion(question,authedUser))})
      .catch((e) => {
        console.warn('Error in handleAddQuestion: ', e)})

  }
}

export function receiveQuestions (questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions,
    }
  }

export function handleAddAnswer ( qid, answer){
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return _saveQuestionAnswer({
      authedUser:authedUser.id, 
      qid, 
      answer
    })
      .then(() => {dispatch(addAnswer(authedUser, qid,answer))})
      .catch((e) => {
        console.warn('Error in handleAddAnswer: ', e)})
  }
}