import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { LoginRequest } from "../../types/loginRequest.interface";
import { ActionTypes } from "../action-types";

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequest }>()
)

export const loginSuccesAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)
