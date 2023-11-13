import { combineReducers, CombinedState, AnyAction, Reducer } from 'redux'
import auth, { AuthState } from './slices/auth'

export type RootState = CombinedState<{
  auth: CombinedState<AuthState>
}>

export interface AsyncReducers {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: Reducer<any, AnyAction>
}

const staticReducers = {
  auth,
}

const rootReducer =
  (asyncReducers?: AsyncReducers) => (state: RootState, action: AnyAction) => {
    const combinedReducer = combineReducers({
      ...staticReducers,
      ...asyncReducers,
    })
    return combinedReducer(state, action)
  }

export default rootReducer
