import { REGISTER_USER, LOGIN_USER, GET_INFO_USER, LOGOUT_USER } from "../const/index"

// Action register user
export const registUser = (infoUser) => {
    return {
        type: REGISTER_USER,
        infoUser
    }
}

// Login user
export const loginUser = (id) => {
    return {
        type: LOGIN_USER,
        id
    }
}

// Get information user
export const getInfoUser = (id) => {
    return {
        type: GET_INFO_USER,
        id
    }
}

// Logout user
export const logoutUser = (id) => {
    return {
        type: LOGOUT_USER,
        id
    }
}