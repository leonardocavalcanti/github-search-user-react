import { USERS_SET, USERS_SELECT } from './actions'

const initialState = {
    items: [],
    item: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USERS_SET:
            return { ...state, ...{ items: action.payload } }
        case USERS_SELECT:
            return { ...state, ...{ item: action.payload } }
        default:
            return state
    }
}