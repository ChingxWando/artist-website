import { EnumBackpackActions } from 'actions/backpack'

export default function backpack (state = {collapsed: true}, action) {
  switch (action.type) {
    case EnumBackpackActions.TOGGLE:
      return Object.assign({}, state, {collapsed: !state.collapsed})
    default:
      return state
  }
}
