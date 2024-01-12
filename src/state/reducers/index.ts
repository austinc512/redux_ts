import { combineReducers } from 'redux';
import PKGsReducer from './PKGsReducer';

const reducers = combineReducers({
  PKGs: PKGsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
