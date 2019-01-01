import { FETCH_JOBS } from './types';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import axios from 'axios';

const JOBS_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript',
};

const buildJobsUrl = (zip) => {
    const query = qs.stringify({ ...JOBS_QUERY_PARAMS, l: zip });
    return `${JOB_ROOT_URL}${query}`;
}

export const fetchJobs = (region) => async (dispatch) => {
    try {
        let zip = await reverseGeocode(region);
        const url = buildJobsUrl(zip);
        let { data } = await axios.get(url);
        dispatch({
            type: FETCH_JOBS,
            payload: data
        });
        console.log('DATA', data);
    } catch (error) {
        console.error('ERROR', error);
    }
}