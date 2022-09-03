import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_ONENEWS_REQUEST,
  FETCH_ONENEWS_SUCCESS,
  FETCH_ONENEWS_FAILURE,
} from '../actions/postsActions';

const initialState = {
  fetchLoading: false,
  singleLoading: false,
  news: [],
  oneNews: {},
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return { ...state, fetchLoading: true };
    case FETCH_NEWS_SUCCESS:
      return { ...state, fetchLoading: false, news: action.payload };
    case FETCH_NEWS_FAILURE:
      return { ...state, fetchLoading: false };
    case FETCH_ONENEWS_REQUEST:
      return { ...state, singleLoading: true };
    case FETCH_ONENEWS_SUCCESS:
      return { ...state, singleLoading: false, oneNews: action.payload };
    case FETCH_ONENEWS_FAILURE:
      return { ...state, singleLoading: false };
    default:
      return state;
  }
};

export default postsReducer;