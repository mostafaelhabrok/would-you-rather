import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import { handleInitialData } from '../actions/shared'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'
import Login from './Login'
import Home from './Home'
import Question from './Question'


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
      }
    render(){
if(Object.keys(this.props.authedUser).includes("id")){
        return (
        <Router >
            <Nav />
            <Route path='/leaderboard' exact component={Leaderboard} />
            <Route path='/add' exact component={NewQuestion} />
            <Route path='/login' exact component={Login} />
            <Route path='/' exact component={Home} />
            <Route path='/question/:id' exact component={Question} />
        </Router>
            
        )
    }
else {
    return(
    <Login />
)
    }
    }
}
function mapStateToProps ({ authedUser }) {
    return {
        authedUser
    }
  }
export default connect(mapStateToProps)(App)