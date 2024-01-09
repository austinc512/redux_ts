import { ActionType } from '../action-types';
import { Action } from '../actions';
/*
This import statement takes advantage of the implicit index file resolution. 
When you import from a directory (in this case, ../actions) without specifying 
a file, TypeScript (and JavaScript) will automatically look for an index.ts 
file in that directory. Since your actions directory contains an index.ts file, 
this statement will correctly import the Action type from it.
*/

interface PKGsState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const PKGsReducer = (
  state: PKGsState = initialState,
  action: Action
): PKGsState => {
  switch (action.type) {
    case ActionType.SEARCH_PKGS:
      // 100% certain that 'action' is SearchPKGsAction
      // the action object matches the structure defined by the interface.
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_PKGS_SUCCESS:
      // 100% certain that 'action' is SearchPKGsSuccessAction
      // the action object matches the structure defined by the interface.
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_PKGS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    // 100% certain that 'action' is SearchPKGsErrorAction
    // the action object matches the structure defined by the interface.
    default:
      return state;
  }
};

export default PKGsReducer;
