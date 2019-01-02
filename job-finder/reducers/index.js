import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer';
import jobs_reducer from './jobs_reducer';
import likes_reducer from './likes_reducer';

export default combineReducers({
    auth: auth_reducer,
    jobs: jobs_reducer,
    likedJobs: likes_reducer
});