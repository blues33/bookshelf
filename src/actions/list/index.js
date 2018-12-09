import { API_CALL } from '../../middlewares/api';
import listActionsContstant from '../../actionTypes/list';

const listFetch = () => ({
  [API_CALL]: {
    route: 'http://localhost:3001/books',
    types: [
      listActionsContstant.FETCH_REQUEST,
      listActionsContstant.FETCH_SUCCESS,
      listActionsContstant.FETCH_FAILURE,
    ],
  },
});

export default listFetch;
