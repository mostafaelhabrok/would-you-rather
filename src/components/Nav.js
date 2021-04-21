import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { handleLogout} from "../actions/autheduser"
import { connect } from 'react-redux'

class Nav extends Component {
   logout = () => {
    const {dispatch} = this.props
    dispatch(handleLogout())
}
render(){
  if (!Object.keys(this.props.authedUser).includes("id")) {
    alert("Please Login first")
    return (
  
  <Redirect to="/login"/>
  )}
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li style={{marginRight:0,marginLeft:"auto"}}>
          Hello{"  "}<strong><mark>{" " + this.props.users[this.props.authedUser.id].name}</mark></strong> 
        </li>
        <li style={{marginRight:50,marginLeft:"auto"}}>
          <NavLink to='/login' onClick={this.logout} activeClassName='active'>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
 }
 function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}
 export default connect(mapStateToProps)(Nav)