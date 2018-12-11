import { createSelector } from 'reselect';

const getData = state => state.List.data;
const getState = state => state.List.state;

const listSelector = createSelector([getData, getState], (data, state) => ({
  data,
  state,
}));

export default listSelector;
