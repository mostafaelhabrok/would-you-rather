import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component{
    render(){
      
const IDs = Object.keys(this.props.u)
.sort( (a,b) => (Object.keys(this.props.u[b].answers).length+this.props.u[b].questions.length) -
(Object.keys(this.props.u[a].answers).length+this.props.u[a].questions.length)
                )

      return(
        <Fragment>
            <div>
              <h3>Leaderboard</h3>
              <ul>
                {IDs.map((u) => (
                  <li className="leaderboard" key={u}>
                    <div>
                    <h3 className="center">{this.props.u[u].name}</h3>
                    <div style={{fontWeight:"bold"}} className="right">
                     <p >Score</p>  
                     <p style={{color:"red",fontSize:24}}>
                     {Object.keys(this.props.u[u].answers).length+this.props.u[u].questions.length}
                     </p>
                    </div>
                    <img alt="avatar" src={this.props.u[u].avatarURL}></img>
                    <div className="center">
                      Answered Questions: {Object.keys(this.props.u[u].answers).length}
                      </div>
                      <div className="center">
                      Created Questions: {this.props.u[u].questions.length}
                    </div>

                    
                    </div>
                    
                  </li>
                ))

                }
              </ul>
            </div>
            </Fragment>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
      u:users
    }
  }

export default connect(mapStateToProps)(Leaderboard)