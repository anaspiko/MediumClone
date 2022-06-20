import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { RegisterRequest } from "../../types/registerRequest.interface";
import { ActionTypes } from "../action-types";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequest }>())

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>())


export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>())
