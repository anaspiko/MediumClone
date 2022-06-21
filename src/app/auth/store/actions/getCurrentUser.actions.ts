import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { ActionTypes } from "../action-types";

export const getCurrentUserAction = createAction(
  ActionTypes.GET_CURRENT_USER
)

export const getCurrentUserSuccesAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
)
