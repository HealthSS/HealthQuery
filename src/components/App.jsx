import { connect } from 'react-redux'
import TheComponent from '../components/App.jsx';
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
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(TheComponent)

export default App;