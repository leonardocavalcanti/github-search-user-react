import { combineReducers } from 'redux'
import usersReducer from './users/reducers'
import repositoriesReducer from './repositories/reducers'

export default combineReducers({
  users: usersReducer,
  repositories: repositoriesReducer
})