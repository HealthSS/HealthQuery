import * as types from "./actionTypes.js";

export const userUpdate = (username) => ({
    type: types.USER_UPDATE,
    payload: username,
});

export const passwordUpdate = (password) => ({
    type: types.PASSWORD_UPDATE,
    payload: password
});

export const reportUpdate = (report) => ({
    type: types.REPORT_UPDATE,
    payload: report
});

export const byeUpdate = (bye) => ({
    type: types.BYE_UPDATE,
    payload: bye
});

export const healUpdate = (heal) => ({
    type: types.HEAL_UPDATE,
    payload: heal
});

export const addCase = (location, type) => ({
    type: types.ADD_CASE,
    payload: {location, type}
});

export const removeCase = (id) => ({
    type: types.REMOVE_CASE,
    payload: {id}
});

export const updateLogin = (login) => ({
    type: types.UPDATE_LOGIN,
    payload: login
});

