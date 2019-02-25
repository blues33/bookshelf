import mirrorCreator from 'mirror-creator';

export default mirrorCreator([
  'FETCH_REQUEST',
  'FETCH_SUCCESS',
  'FETCH_FAILURE',

  'DELETE_FETCH_REQUEST',
  'DELETE_FETCH_SUCCESS',
  'DELETE_FETCH_FAILURE',


  'ADD_FETCH_REQUEST',
  'ADD_FETCH_SUCCESS',
  'ADD_FETCH_FAILURE',


], {
  prefix: 'LIST.',
});
