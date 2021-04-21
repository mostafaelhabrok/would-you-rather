import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class AnsweredQuestions extends Component {

 render(){
     const {users} = this.props

     const IDs1 = Object.keys(this.props.questions).filter((id) =>
     (this.props.questions[id].optionOne.votes.includes(this.props.authedUser.id) || 
     this.props.questions[id].optionTwo.votes.includes(this.props.authedUser.id)))
     .sort((a,b) => 
     this.props.questions[b].timestamp - this.props.questions[a].timestamp)


     return(
         <div className="center">
             
             {IDs1.map((id) => (
                <li className="question" key={id}>
                <span>Asked By</span><strong>{" "+ users[this.props.questions[id].author].name}</strong>
                <br></br>
                <img alt="avatar" src={users[this.props.questions[id].author].avatarURL}></img>
                <h4>Would You Rather</h4>
                <div>{this.props.questions[id].optionOne.text}</div> OR 
                <div>{" "+ this.props.questions[id].optionTwo.text}</div>
                <Link to={`/question/${id}`} >View</Link>
                </li>
             ))}
            
         </div>
     )
 }   
}
function mapStateToProps ({ questions,authedUser,users }) {
    return {
      questions,
      authedUser,
      users
    }
  }
export default withRouter(connect(mapStateToProps)(AnsweredQuestions))