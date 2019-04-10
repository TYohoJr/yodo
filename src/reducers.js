import React from 'react';
import { CombineReducers, combineReducers } from 'redux';
import HomePage from './Home/HomePage';

const currentPageReducer = (state, action) => {
    if (!state) {
        state = {
            currentPage: <HomePage />
        }
    }
    switch (action.type) {
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

export default combineReducers({
    currentPageReducer
});