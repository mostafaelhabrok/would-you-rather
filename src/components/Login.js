import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleLogin} from "../actions/autheduser"
import { Redirect } from 'react-router-dom'

class Login extends Component {
    state={
        selectValue:"",
        toHome:false,
        enable:true
    }
    changeSelect = (v) => {
        this.setState(() => ({selectValue:v}))
        if (v !== ""){        this.setState(() => ({enable:false}))    }
    }
    login = (e) => {
        e.preventDefault()
        const {dispatch} = this.props
        dispatch(handleLogin({"id":this.state.selectValue}))
        this.setState(() => ({toHome:true}))
        
    }

    render(){
        const {toHome} = this.state
        if (toHome===true){return <Redirect to='/' />}
        return(
            <div>
                <h3 className="center">LOGIN</h3>
                <form className="center" onSubmit={this.login}>
                <select defaultValue="" onChange={(e) => this.changeSelect(e.target.value)}>
                    <option value="" disabled >Select...</option>
                    <option value="sarahedo">Sarah Edo</option>
                    <option value="tylermcginnis">Tyler McGinnis</option>
                    <option value="johndoe">John Doe</option>
                </select>
                <button disabled={this.state.enable} type="submit">LOGIN</button>
                </form>
            </div>
        )
    }
}
function mapStateToProps ({ users }) {
    return {
      u:users
    }
  }
export default connect(mapStateToProps)(Login)