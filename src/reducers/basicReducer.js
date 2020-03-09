const basicReducer = (state = 'some text', action) => {
    switch(action.type) {
     case 'BASIC_ACTION': return action.text
     default: return state
    }
   }
   export default basicReducer;