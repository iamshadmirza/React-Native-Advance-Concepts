import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';
import { REHYDRATE } from 'redux-persist/es/constants';
import _ from 'lodash';

export default function (state = [], action) {
    switch (action.type) {
        case REHYDRATE:
            return action.payload.likedJobs || [];
        case LIKE_JOB:
            return _.uniqBy([
                action.payload, ...state
            ], 'jobKey');

        case CLEAR_LIKED_JOBS:
            return [];

        default:
            return state;
    }

}