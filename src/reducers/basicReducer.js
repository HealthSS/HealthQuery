const initialState = {
    isLoggedIn: null,
    username_txt: "",
    password_txt: "",
    report_txt: "",
    bye_txt: "",
    heal_txt: "",
    pending_cases: []
}
const basicReducer = (state = initialState, action) => {
    switch(action.type) {
     case 'USER_UPDATE': 
        return Object.assign({}, state, {username_txt: action.payload})
        break;
     case 'PASSWORD_UPDATE': 
        return Object.assign({}, state, {password_txt: action.payload})
        break;
     case 'REPORT_UPDATE': 
        return Object.assign({}, state, {report_txt: action.payload})
        break;
     case 'BYE_UPDATE': 
        return Object.assign({}, state, {bye_txt: action.payload})
        break;
     case 'HEAL_UPDATE': 
        return Object.assign({}, state, {heal_txt: action.payload})
        break;
     case 'ADD_CASE': 
        let newCases = JSON.parse(JSON.stringify(state.pending_cases));
        const { location, type } = action.payload
        newCases.push({
            location,
            type
        })
        return Object.assign({},state, { pending_cases : newCases })
        break;
     case 'REMOVE_CASE': 
        const removeCases = JSON.parse(JSON.stringify(state.pending_cases));
        const { id } = action.payload;
        removeCases.splice(id, 1);
        return Object.assign({},state, { pending_cases : removeCases });
        break;
     case 'UPDATE_LOGIN': 
        return Object.assign({},state, { isLoggedIn : action.payload});
        break;
     default: 
        return state;
    }
   }
   export default basicReducer;