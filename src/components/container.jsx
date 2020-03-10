import { connect } from 'react-redux'
// import TheComponent from '../components/App.jsx';
import React, { Component } from 'react'
const mapStateToProps = (state, ownProps) => {
    return {
     buttonText: state.text
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
          dispatch({type: 'BASIC_ACTION', text: 'new text'})
        }
    }
}
class Container extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return(
          <div>
              <h1> component test </h1>
          </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);