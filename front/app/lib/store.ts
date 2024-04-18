import { configureStore,ThunkAction, Action } from '@reduxjs/toolkit'
import  userReducer from './userSlice'
import signUpReducer from './SignUpSlice';
import signInReducer from './SignInSlice';


export const makeStore = () => {
  return configureStore({
    reducer: {
        user:userReducer,
        signUp: signUpReducer,
        signIn: signInReducer,

    },
    
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;