import axiosApi from '../../axiosApi';

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const FETCH_ONENEWS_REQUEST = 'FETCH_ONENEWS_REQUEST';
export const FETCH_ONENEWS_SUCCESS = 'FETCH_ONENEWS_SUCCESS';
export const FETCH_ONENEWS_FAILURE = 'FETCH_ONENEWS_FAILURE';

export const CREATE_NEWS_REQUEST = 'CREATE_NEWS_REQUEST';
export const CREATE_NEWS_SUCCESS = 'CREATE_NEWS_SUCCESS';
export const CREATE_NEWS_FAILURE = 'CREATE_NEWS_FAILURE';

export const DELETE_NEWS_REQUEST = 'DELETE_NEWS_REQUEST';
export const DELETE_NEWS_SUCCESS = 'DELETE_NEWS_SUCCESS';
export const DELETE_NEWS_FAILURE = 'DELETE_NEWS_FAILURE';

export const fetchNewsRequest = () => ({ type: FETCH_NEWS_REQUEST });
export const fetchNewsSuccess = news => ({ type: FETCH_NEWS_SUCCESS, payload: news });
export const fetchNewsFailure = () => ({ type: FETCH_NEWS_FAILURE });

export const fetchOneNewsRequest = () => ({ type: FETCH_ONENEWS_REQUEST });
export const fetchOneNewsSuccess = oneNews => ({ type: FETCH_ONENEWS_SUCCESS, payload: oneNews });
export const fetchOneNewsFailure = () => ({ type: FETCH_ONENEWS_FAILURE });

export const createNewsRequest = () => ({ type: CREATE_NEWS_REQUEST });
export const createNewsSuccess = () => ({ type: CREATE_NEWS_SUCCESS });
export const createNewsFailure = () => ({ type: CREATE_NEWS_FAILURE });

export const deleteNewsRequest = () => ({ type: DELETE_NEWS_REQUEST });
export const deleteNewsSuccess = () => ({ type: DELETE_NEWS_SUCCESS });
export const deleteNewsFailure = () => ({ type: DELETE_NEWS_FAILURE });

export const fetchNews = () => {
    return async dispatch => {
        try {
            dispatch(fetchNewsRequest());
            const response = await axiosApi.get('/news');
            dispatch(fetchNewsSuccess(response.data));
        } catch (e) {
            dispatch(fetchNewsFailure());
        }
    };
};


export const fetchOneNews = id => {
    return async dispatch => {
      try {
        dispatch(fetchOneNewsRequest());
        const response = await axiosApi.get('/news/' + id);
        dispatch(fetchOneNewsSuccess(response.data));
      } catch (e) {
        dispatch(fetchOneNewsFailure());
      }
    };
  };

export const createNews = newsData => {
    return async dispatch => {
        try {
            dispatch(createNewsRequest());
            await axiosApi.post('/news', newsData);
            dispatch(createNewsSuccess());
        } catch (e) {
            dispatch(createNewsFailure());
            throw e;
        }
    };
};


export const deleteNews = id => {
    return async dispatch => {
      try {
        dispatch(deleteNewsRequest());
        const response = await axiosApi.delete('/news/' + id);
        dispatch(deleteNewsSuccess(response.data));
      } catch (e) {
        dispatch(deleteNewsFailure());
      }
    };
  };