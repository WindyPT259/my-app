import axios from 'axios';
import Cookies from 'js-cookie';
import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';
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

export const getToken = async () => {
    let token = Cookies.get('token');//get token 

    if (token) {
        //check token is epx=> get time exp từ mã thông báo xác thực thông qua jwtDecode(token)
        const { exp } = jwtDecode(token);
        const isExpired = dayjs.unix(exp).diff(dayjs()) < 1; //time now

        // Expired token -> Call refreshToken API
        if (isExpired) {
            try {
                // const res = await authAPI.refreshToken();

                // // Succeeded -> Set new token and user information
                // if (res.succeeded) {
                //     const { data } = res;
                //     token = data.jwToken;

                //     Cookies.set('token', token, { expires: 7, secure: true });
                //     localStorage.setItem('user', JSON.stringify(data));
                // } else {
                //     // Error -> Navigate to login page
                //     localStorage.removeItem('user');
                //     window.location = '/login';
                // }
            } catch (error) {
                // Error -> Navigate to login page
                localStorage.removeItem('user');
                window.location = '/login';
            }
        }
    }
}