import ContentActionTypes from './content.types';

export const fetchContentStart = () => ({
  type: ContentActionTypes.FETCH_CONTENT_START
});

export const fetchContentSuccess = posts => ({
  type: ContentActionTypes.FETCH_CONTENT_SUCCESS,
  payload: posts
});

export const fetchContentFailure = errorMessage => ({
  type: ContentActionTypes.FETCH_CONTENT_FAILURE,
  payload: errorMessage
});
