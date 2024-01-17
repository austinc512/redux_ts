import { ActionType } from '../action-types';
import { APIResponse } from '../helperTypes/';

interface SearchPKGsAction {
  type: ActionType.SEARCH_PKGS;
}

interface SearchPKGsSuccessAction {
  type: ActionType.SEARCH_PKGS_SUCCESS;
  payload: APIResponse[];
}

interface SearchPKGsErrorAction {
  type: ActionType.SEARCH_PKGS_ERROR;
  payload: string;
}

export type Action =
  | SearchPKGsAction
  | SearchPKGsSuccessAction
  | SearchPKGsErrorAction;
