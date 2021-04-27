import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import {handleAddAnswer} from "../actions/questions"

class Question extends Component {
    state={
        answer:"",
        enable:true
    }
    change = (e) => {
        this.setState(() => ({answer:e}))
        if (e !== ""){        this.setState(() => ({enable:false}))    }

    }
    saveAnswer = () => {
        const { dispatch } = this.props
        dispatch(handleAddAnswer(this.props.id, this.state.answer))

    }
    render(){
        const {id ,questions,users,authedUser} = this.props

        if(!Object.keys(questions).includes(id)){
            return(
                <Fragment>
            <div>
                <h2 className="center">404: Question Not Found</h2>
            </div>
            </Fragment>
        )}
        
        const author = this.props.questions[id].author
        const name = users[author].name
        let one = ""
        let two = ""
        const voteOne = questions[id].optionOne.votes.includes(authedUser.id)
        const voteTwo = questions[id].optionTwo.votes.includes(authedUser.id)
        if(voteOne){one = "mark"}
        if(voteTwo){two = "mark"}


        if(!(voteOne || voteTwo)){
            return(
                <Fragment>
            <div className="center">
            <span>Asked By</span><strong>{" "+ name}</strong>
            <br></br>
            <img alt="avatar" src={users[author].avatarURL}></img>
            <h3>Poll</h3>
            <h4>Would You Rather</h4>
            <input value="optionOne" onChange={(e) => {this.change(e.target.value)}} type="radio" name="poll" ></input>
            <label >{questions[id].optionOne.text}</label>
            <br></br>
            <span>OR</span>
            <br></br>
            <input value="optionTwo" onChange={(e) => {this.change(e.target.value)}} type="radio" name="poll"></input>
            <label >{questions[id].optionTwo.text}</label>
            <br></br>
            <button disabled={this.state.enable} onClick={this.saveAnswer}>Submit</button>
            </div>
            </Fragment>
        )}


        return(
            <Fragment>
            <div className="center">
                <span>Asked By</span><strong>{" "+ name}</strong>
                <br></br>
                <img alt="avatar" src={users[author].avatarURL}></img>
                <h3>Results</h3>
                <h4>Would You Rather</h4>
                <div className="question">
                <h4 className={one}>{questions[id].optionOne.text}</h4>
                <span>Votes</span><em>{"   "}{questions[id].optionOne.votes.length}</em>
                {"   "}<span>Out of</span>
                <em>{"   "}{questions[id].optionOne.votes.length+questions[id].optionTwo.votes.length}</em>
                <br></br>
                {((questions[id].optionOne.votes.length
                /(questions[id].optionOne.votes.length+questions[id].optionTwo.votes.length)).toFixed(4))*100}
                {"  %  of Votes"}               
                </div>
                <strong>OR</strong>
                <div className="question">
                <h4 className={two}>{questions[id].optionTwo.text}</h4>
                <span>Votes</span><em>{"   "}{questions[id].optionTwo.votes.length}</em>
                {"   "}<span>Out of</span>
                <em>{"   "}{questions[id].optionOne.votes.length+questions[id].optionTwo.votes.length}</em>
                <br></br>
                {((questions[id].optionTwo.votes.length
                /(questions[id].optionOne.votes.length+questions[id].optionTwo.votes.length)).toFixed(4))*100}
                {"  %  of Votes"}
                </div>
            </div>
            </Fragment>

        )


                
    }
}

function mapStateToProps ({ authedUser,questions, users }, props) {
    const { id } = props.match.params
  
    return {
      id,
      authedUser,
      questions,
      users
    }
  }

export default connect(mapStateToProps)(Question)