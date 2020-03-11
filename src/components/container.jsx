import { connect } from 'react-redux'
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
              <div id="reportSection">
                <input type="text" placeholder="Location"/>
                <button type="submit"> Report </button>
              {/* </div>
              <div id="updateButton"> */}
                <input type="text" placeholder="Location"/>
                <button type="submit"> X.X </button>
                <input type="text" placeholder="Location"/>
                <button type="submit"> *_* </button>
              </div>
          </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);