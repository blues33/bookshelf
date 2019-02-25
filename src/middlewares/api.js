/* eslint no-unused-vars: 0 */

import api from '../services/api';

export const API_CALL = Symbol('API_Symbol');

export default store => next => (action) => {
  const API_CALL_DATA = action[API_CALL]
  console.log(API_CALL_DATA)

  if (typeof API_CALL_DATA === 'undefined') {
    return next(action);
  }

  const { route, types, data } = API_CALL_DATA;

  if (!route) {
    throw new Error('Route parameter is undefined.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  function constructRequestParams(extra) {
    const fullParams = Object.assign({}, action, extra);

    delete fullParams[API_CALL];

    return fullParams;
  }

  const timestamp = +new Date();

  const [requestType, successType, failureType] = types;

  next(
    constructRequestParams({
      type: requestType,
      timestamp,
      echo: action.echo,
    }),
  );

  return api(route, data).then(
    response => next(
      constructRequestParams({
        response,
        type: successType,
        timestamp,
        echo: action.echo,
      }),
    ),
    error => next(
      constructRequestParams({
        type: failureType,
        error: error || { message: 'Something bad happened' },
        timestamp,
        echo: action.echo,
      }),
    ),
  );
};
