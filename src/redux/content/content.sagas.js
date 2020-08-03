import { all, call, put, takeLatest } from 'redux-saga/effects';
import client from '../../contentful/contentful.utils';
import {
  fetchContentFailure,
  fetchContentSuccess, fetchSingleArticleFailure,

  fetchSingleArticleSuccess
} from "./content.actions";
import ContentActionTypes from './content.types';
const { log } = console;

export function* fetchContentAsync() {
  try {
    const data = yield client.getEntries({content_type: 'post'});
    log('Received data from Contentful API:', data); 
    const posts = data.items; // location of posts inside JSON data received from Contentful API.
    yield put(fetchContentSuccess(data));
  } catch (error) {
    yield put(fetchContentFailure(error.message));
  }
}

export function* fetchSingleArticleAsync(slug) {
  try {
    log('Helllooooooooo');
    const data = yield client.getEntries({content_type: 'post' , 'fields.slug': slug});
    log('Received Single Article from Contentful API:', data); 
    // const post = data.items; // location of posts inside JSON data received from Contentful API.
    yield put(fetchSingleArticleSuccess(data));
  } catch (error) {
    log('oops');
    yield put(fetchSingleArticleFailure(error.message));
  }
}

export function* fetchContentStart() {
  yield takeLatest(
    ContentActionTypes.FETCH_CONTENT_START,
    fetchContentAsync
  );
}

export function* fetchSingleArticleStart(slug) {
  yield takeLatest(
    ContentActionTypes.FETCH_ARTICLE_START,
    fetchSingleArticleAsync(slug)
  );
}

export function* contentSagas() {
  yield all([call(fetchContentStart),call(fetchSingleArticleStart)]);
}
