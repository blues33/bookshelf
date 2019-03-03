import { API_CALL } from '../../middlewares/api';
import listActionsContstant from '../../actionTypes/list';

const fetchList = () => ({
  [API_CALL]: {
    route: {
      path: 'http://localhost:3001/books',
      params: {
        method: 'GET',
      },
    },
    types: [
      listActionsContstant.FETCH_REQUEST,
      listActionsContstant.FETCH_SUCCESS,
      listActionsContstant.FETCH_FAILURE,
    ],
  },
});

const add = data => ({
  [API_CALL]: {
    route: {
      path: 'http://localhost:3001/add',
      params: {
        method: 'POST',
      },
    },
    types: [
      listActionsContstant.ADD_FETCH_REQUEST,
      listActionsContstant.ADD_FETCH_SUCCESS,
      listActionsContstant.ADD_FETCH_FAILURE,
    ],
    data,
  },
});

const deleteBookById = id => ({
  [API_CALL]: {
    route: {
      path: 'http://localhost:3001/delete',
      params: {
        method: 'POST',
      },
    },
    types: [
      listActionsContstant.DELETE_FETCH_REQUEST,
      listActionsContstant.DELETE_FETCH_SUCCESS,
      listActionsContstant.DELETE_FETCH_FAILURE,
    ],
    data: {
      id,
    },
  },
});

export { fetchList, add, deleteBookById };
