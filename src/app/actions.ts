import { ActionType, createAction } from 'typesafe-actions';

export const exampleAction = createAction('EXAMPLE_ACTION')();

export const actions = { exampleAction };
export type Action = ActionType<typeof actions>;