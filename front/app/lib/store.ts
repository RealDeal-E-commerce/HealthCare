import { configureStore,ThunkAction, Action } from '@reduxjs/toolkit'
import signUpReducer from './SignUpSlice';
import signInReducer from './SignInSlice';
import SpecialtySlice from './SpecialtySlice';

import CurrentUserReducer from './CurrentUserSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      currentUser:CurrentUserReducer ,
        signUp: signUpReducer,
        signIn: signInReducer,
        SpecialtySlice : SpecialtySlice

    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;