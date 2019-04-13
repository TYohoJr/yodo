import React from 'react';
import { combineReducers } from 'redux';
import HomePage from './Home/HomePage';
import UserAccount from './Components/UserAccount';
import LogInDropdown from './Components/LogInDropdown';
import LogOutDropdown from './Components/LogOutDropdown';
import LoadingSpinner from './Components/LoadingSpinner';

const userDataReducer = (state, action) => {
    if (!state) {
        state = {
            data: null
        }
    }
    switch (action.type) {
        case 'userLogIn':
            return state = {
                ...state,
                data: action.data
            }
        case 'logOutUser':
            return state = {
                data: null
            }
        default:
            return state = {
                ...state
            }
    }
}

const currentPageReducer = (state, action) => {
    if (!state) {
        state = {
            currentPage: <HomePage />
        }
    }
    switch (action.type) {
        case "loadingData":
            return state = {
                ...state,
                currentPage: <LoadingSpinner />
            }
        case "showHomepage":
            return state = {
                ...state,
                currentPage: <HomePage />
            }
        case 'changePage':
            return state = {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state = {
                ...state
            }
    }
}

const homePageReducer = (state, action) => {
    if (!state) {
        state = {
            currentTab: 'test'
        }
    }
    switch (action.type) {
        case "changeHomePageTab":
            return state = {
                ...state,
                currentTab: action.currentTab            }
        default:
            return state = {
                ...state
            }
    }
}

const logInReducer = (state, action) => {
    if (!state) {
        state = {
            logInUsername: "",
            logInPassword: "",
            showPassword: "password",
            userAccount: null,
            statusDropdown: <LogInDropdown />
        }
    }
    switch (action.type) {
        case "changeLogInStatus":
            return state = {
                ...state,
                userAccount: <UserAccount />,
                statusDropdown: <LogOutDropdown />
            }
        case "changeLogInUsername":
            return state = {
                ...state,
                logInUsername: action.logInUsername
            }
        case "changeLogInPassword":
            return state = {
                ...state,
                logInPassword: action.logInPassword
            }
        case "changeLogInShowPassword":
            return state = {
                ...state,
                showPassword: action.showPassword
            }
        case "resetLogInData":
            return state = {
                logInUsername: "",
                logInPassword: "",
                showPassword: "password",
            }
        default:
            return state = {
                ...state,
            }
    }
}

const changePasswordReducer = (state, action) => {
    if (!state) {
        state = {
            oldPassword: "",
            newPassword1: "",
            newPassword2: "",
            showPassword: "password"
        }
    }
    switch (action.type) {
        case "changeOldPassword":
            return state = {
                ...state,
                oldPassword: action.oldPassword
            }
        case "changeNewPassword1":
            return state = {
                ...state,
                newPassword1: action.newPassword1
            }
        case "changeNewPassword2":
            return state = {
                ...state,
                newPassword2: action.newPassword2
            }
        case "changeShowPassword":
            return state = {
                ...state,
                showPassword: action.showPassword
            }
        case "resetChangePassword":
            return state = {
                oldPassword: "",
                newPassword1: "",
                newPassword2: "",
                showPassword: "password",
            }
        default:
            return state = {
                ...state,
            }
    }
}

const createAccountReducer = (state, action) => {
    if (!state) {
        state = {
            createUsername: "",
            createPassword1: "",
            createPassword2: "",
            showPassword: "password"
        }
    }
    switch (action.type) {
        case "changeCreateUsername":
            return state = {
                ...state,
                createUsername: action.createUsername
            }
        case "changeCreatePassword1":
            return state = {
                ...state,
                createPassword1: action.createPassword1
            }
        case "changeCreatePassword2":
            return state = {
                ...state,
                createPassword2: action.createPassword2
            }
        case "changeShowPassword":
            return state = {
                ...state,
                showPassword: action.showPassword
            }
        case "resetCreateAccount":
            return state = {
                createUsername: "",
                createPassword1: "",
                createPassword2: "",
                showPassword: "password",
            }
        default:
            return state = {
                ...state,
            }
    }
}

export default combineReducers({
    currentPageReducer,
    logInReducer,
    changePasswordReducer,
    createAccountReducer,
    userDataReducer,
    homePageReducer,
});