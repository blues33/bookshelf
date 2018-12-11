import listActionsConstants from '../../actionTypes/list';

const INITIAL_STATE = {
  state: {
    isFetching: false,
    isSuccess: false,
    isFailure: false,
  },
  data: [],
};

export default function List(state = INITIAL_STATE, action) {
  switch (action.type) {
    case listActionsConstants.FETCH_REQUEST:
      return {
        ...state,
        state: {
          ...state.state,
          isFetching: true,
          isSuccess: false,
          isFailure: false,
        },
      };

    case listActionsConstants.FETCH_SUCCESS:
      return {
        ...state,
        state: {
          ...state.state,
          isFetching: false,
          isSuccess: true,
          isFailure: false,
        },
        data: action.response,
      };

    case listActionsConstants.FETCH_FAILURE:
      return {
        ...state,
        state: {
          isFetching: false,
          isSuccess: false,
          isFailure: true,
        },
        data: [],
      };

    default:
      return state;
  }
}
