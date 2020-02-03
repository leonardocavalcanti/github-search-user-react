import { REPOSITORIES_SET, REPOSITORIES_SELECT } from './actions'

const initialState = {
    items: [],
    item: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REPOSITORIES_SET:
            return { ...state, ...{ items: action.payload } }
        case REPOSITORIES_SELECT:
            return { ...state, ...{ item: action.payload } }
        default:
            return state
    }
}