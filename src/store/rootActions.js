import * as usersActions from '../store/users/actions'
import * as repositoriesActions from '../store/repositories/actions'
import { bindActionCreators } from 'redux'

const rootActions = dispatch => {
  return {
    usersActions: bindActionCreators(usersActions, dispatch),
    repositoriesActions: bindActionCreators(repositoriesActions, dispatch),
  }
}

export default rootActions