import { createAction, props } from '@ngrx/store';

export const loadLabs = createAction(
  '[Labs] Load Labs'
);

export const loadLabsFailure = createAction('[Labs] Load Labs Failure');

export const loadLabsSuccess = createAction('[Labs] Load Labs Success', props<{labs: Lab[]}>());
