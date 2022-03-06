import { PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {  parseData } from "../components/DataTable";
import { ActionType } from "../actions";

const allTasksReducer = (state = [], action: PayloadAction<string>) => {
    switch (action.type) {
        case ActionType.DownloadTasks:
                return parseData(action.payload);
        default: 
            return state;
    }
    
}

const searchQueryReducer = (state = '', action: PayloadAction<string>) => {
    switch (action.type) {
        case ActionType.QueryTyped: {
            return action.payload;
        }
        default: 
            return state;
    }
}

export default combineReducers({
  allTasks: allTasksReducer,
  searchQuery: searchQueryReducer,
});