import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: reducerForm
});

export default rootReducer;
