import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import cities from './cities';

export const rootReducer = combineReducers({ cities });

export type State = StateType<typeof rootReducer>;