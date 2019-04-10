import React from 'react';
import { CombineReducers, combineReducers } from 'redux';

const currentPageReducer = (state, action) => {
    if (!state) {
        state = {
            currentPage: 'Page content'
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