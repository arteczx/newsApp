export const GET_NEWS_FEED = 'GET_NEWS_FEED';

export const getNewsFeed =
() => (dispatch) => {
      dispatch({
        type: GET_NEWS_FEED,
        payload: [],
      });
};

import {GET_NEWS_FEED} from './actions';

const initialState = {
  newsFeed: [],
};

const feedReducer = (
  state = initialState,
  action: {type: String; payload: any},
) => {
  switch (action.type) {
    case GET_NEWS_FEED:
      return {...state, newsFeed: action.payload};
    default:
      return state;
  }
};
export default feedReducer;