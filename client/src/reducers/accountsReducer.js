import {FETCH_ACCOUNTS} from "../actions/types";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_ACCOUNTS:
            return action.payload;
        default:
            return state;
    }
}