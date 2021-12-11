import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLabs from '../reducers/labs.reducer';

export const selectLabsState = createFeatureSelector<fromLabs.State>(
  fromLabs.labsFeatureKey
);

const {selectAll} = fromLabs.labsAdapter.getSelectors();

export const selectLabsAll = createSelector(
  selectLabsState,
  selectAll
);
