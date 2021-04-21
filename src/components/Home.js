import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestions from './AnsweredQuestions'
import UnAnsweredQuestions from './UnAnsweredQuestions'
class Home extends Component {
    state={
        a:false,
        u:true
    }
    show = () => {
        this.setState(() => ({a:false,u:true}))
    }
    hide= () =>{
        this.setState(() => ({a:true,u:false}))
    }
 render(){
     return(
         <Fragment>
         <div className="center">
             <button className={this.state.u ? "active":""} onClick={this.show}>Unanswered Questions</button>
             <button className={this.state.a ? "active":""} onClick={this.hide}>Answered Questions</button> 
             <br></br>
             {this.state.a&&<AnsweredQuestions/>}
             {this.state.u&&<UnAnsweredQuestions/>}
         </div>
         </Fragment>
     )
 }   
}
export default connect()(Home)