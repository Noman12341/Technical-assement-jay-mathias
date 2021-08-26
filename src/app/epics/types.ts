import { Epic as GenericEpic } from 'redux-observable';
import { Action } from '../actions';
import { State } from '../reducers';
import { Services } from '../services';

export type Epic = GenericEpic<Action, Action, State, Services>;

