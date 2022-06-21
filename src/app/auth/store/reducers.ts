import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccesAction } from "./actions/getCurrentUser.actions";
import { loginAction, loginFailureAction, loginSuccesAction } from "./actions/login.actions";
import { registerAction, registerFailureAction, registerSuccessAction } from "./actions/register.actions";


const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
}


const authReducer = createReducer(
  initialState,
  on(registerAction, (state: AuthStateInterface) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(registerSuccessAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(registerFailureAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  })),
  on(loginAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(loginSuccesAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(loginFailureAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  })),
  on(getCurrentUserAction, (state): AuthStateInterface => ({
    ...state,
    isLoading: true,
  })),
  on(getCurrentUserSuccesAction, (state, action): AuthStateInterface => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(getCurrentUserFailureAction, (state): AuthStateInterface => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    currentUser: null
  }))
)


export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
