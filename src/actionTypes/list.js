import mirrorCreator from 'mirror-creator';

export default mirrorCreator([
  'FETCH_REQUEST',
  'FETCH_SUCCESS',
  'FETCH_FAILURE',
], {
  prefix: 'LIST.',
});
