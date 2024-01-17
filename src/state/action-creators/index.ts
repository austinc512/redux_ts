import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

import 'redux-thunk';

export const searchPKGs = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_PKGS,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.objects.map((result: any) => {
        const name = result.package.name;
        const description = result.package.description;
        const { npm, homepage, repository } = result.package.links;
        return { name, description, npm, homepage, repository };
      });
      dispatch({
        type: ActionType.SEARCH_PKGS_SUCCESS,
        payload: names,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_PKGS_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
