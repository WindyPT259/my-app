import axios from 'axios';
import queryString from 'query-string';

export const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json',
        withCredentials: 'include'
    },
    paramsSerializer: params => queryString.stringify(params)
});
