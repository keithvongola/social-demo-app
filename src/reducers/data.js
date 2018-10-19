import { fromJS } from 'immutable';
import { createReducer } from '../helpers';
import {
  GET_USERS_SUCCESS,
  GET_POSTS_SUCCESS,
  GET_COMMENTS_SUCCESS,
  GET_TODOS_SUCCESS,
  GET_ALBUMS_SUCCESS,
  GET_PHOTOS_SUCCESS,
  GET_ALBUMS,
  GET_COMMENTS,
} from '../actions/data';

const initialState = fromJS({
  users: [],
  albums: [],
  photos: [],
  posts: [],
  comments: [],
  todos: [],
});

const actionsMap = {
  [GET_USERS_SUCCESS]: (state, action) => state.mergeDeep(action.data),
  [GET_POSTS_SUCCESS]: (state, action) => state.mergeDeep(action.data),
  [GET_COMMENTS]: state => state.merge({ comments: [] }),
  [GET_COMMENTS_SUCCESS]: (state, action) => state.mergeDeep(action.data),
  [GET_TODOS_SUCCESS]: (state, action) => state.mergeDeep(action.data),
  [GET_ALBUMS]: state => state.merge({ album: [], photos: [] }),
  [GET_ALBUMS_SUCCESS]: (state, action) => state.mergeDeep(action.data),
  [GET_PHOTOS_SUCCESS]: (state, action) => state.mergeDeep(action.data),
};

export default createReducer(initialState, actionsMap);
