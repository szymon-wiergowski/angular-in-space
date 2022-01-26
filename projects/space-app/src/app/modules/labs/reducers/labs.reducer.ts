import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Lab } from 'space-api/types';
import * as LabsActions from '../actions/labs.actions';
import { loadLabsSuccess } from '../actions/labs.actions';

export const labsFeatureKey = 'labs';

export interface State extends EntityState<Lab> {

}

export const labsAdapter: EntityAdapter<Lab> = createEntityAdapter<Lab>();

export const initialState: State = labsAdapter.getInitialState()

export const reducer = createReducer(
  initialState,
  on(loadLabsSuccess, (state, {labs}) => labsAdapter.setAll(labs, state)),
);
