import React, { Component , Fragment} from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from "../actions/questions"
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state={
        optionOne:"",
        optionTwo:"",
        toHome:false
    }
    change1 = (v) => {
        this.setState(() => ({optionOne:v}))
    }
    change2 = (v) => {
        this.setState(() => ({optionTwo:v}))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch } = this.props

        dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo,this.props.authedUser.id))
        this.setState(() => ({toHome:true}))
    }

    render(){
        if(this.state.toHome===true){return <Redirect to="/"/>}
        
        return(
            <Fragment>
            <div>
                <form className="center" onSubmit={this.handleSubmit}>
                <h2>Create New Question</h2>
                <h3>Would you rather</h3>
                <input type="text" onChange={(e) => {this.change1(e.target.value)}} value={this.state.optionOne}></input>
                <p>OR</p>
                <input type="text" onChange={(e) => {this.change2(e.target.value)}} value={this.state.optionTwo}></input>
                <br></br>
                <br></br>
                <br></br>

                <button type="submit">Submit</button>

                </form>
            </div>
            </Fragment>
        )
    }
}
function mapStateToProps ({ users ,authedUser }) {
    return {
      u:users,
      authedUser
    }
  }

export default connect(mapStateToProps)(NewQuestion)