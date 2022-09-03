import axiosApi from '../../axiosApi';

export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const CREATE_MESSAGE_REQUEST = 'CREATE_MESSAGE_REQUEST';
export const CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS';
export const CREATE_MESSAGE_FAILURE = 'CREATE_MESSAGE_FAILURE';

export const DELETE_MESSAGE_REQUEST = 'DELETE_MESSAGE_REQUEST';
export const DELETE_MESSAGE_SUCCESS = 'DELETE_MESSAGE_SUCCESS';
export const DELETE_MESSAGE_FAILURE = 'DELETE_MESSAGE_FAILURE';

export const fetchMessagesRequest = () => ({ type: FETCH_MESSAGES_REQUEST });
export const fetchMessagesSuccess = messages => ({ type: FETCH_MESSAGES_SUCCESS, payload: messages });
export const fetchMessagesFailure = () => ({ type: FETCH_MESSAGES_FAILURE });

export const createMessageRequest = () => ({ type: CREATE_MESSAGE_REQUEST });
export const createMessageSuccess = () => ({ type: CREATE_MESSAGE_SUCCESS });
export const createMessageFailure = () => ({ type: CREATE_MESSAGE_FAILURE });

export const deleteMessageRequest = () => ({ type: DELETE_MESSAGE_REQUEST });
export const deleteMessageSuccess = () => ({ type: DELETE_MESSAGE_SUCCESS });
export const deleteMessageFailure = () => ({ type: DELETE_MESSAGE_FAILURE });

export const fetchMessages = () => {
    return async dispatch => {
        try {
            dispatch(fetchMessagesRequest());
            const response = await axiosApi.get('/comments');
            dispatch(fetchMessagesSuccess(response.data));
        } catch (e) {
            dispatch(fetchMessagesFailure());
        }
    };
};

export const createMessage = (id , messageData) => {
    return async dispatch => {
        try {
            dispatch(createMessageRequest());
            await axiosApi.post('/comments', messageData);
            dispatch(createMessageSuccess());
        } catch (e) {
            dispatch(createMessageFailure());
            throw e;
        }
    };
};

export const deleteMessage = id => {
    return async dispatch => {
        try {
            dispatch(deleteMessageRequest());
            await axiosApi.post('/comments/' + id);
            dispatch(deleteMessageSuccess());
        } catch (e) {
            dispatch(deleteMessageFailure());
            throw e;
        }
    };
};