import axios from 'axios';
import store from '../index'

const apiMiddleware = () => (next) => (action) => {

    next(action);
    const baseUrl = process.env.REACT_APP_API_BASE_URL

    const { api, file, successMessage, errorMessage } = action.meta || {};
    const { path, mockPath, method = 'GET', data } = action.payload || {};

    if (!api) {
        return;
    }

    if (api && !path) {
        throw new Error(`'path' not specified for api action ${action.type}`);
    }
    const url = mockPath ? mockPath : baseUrl + path;

    const header = {
        headers: { 'Content-Type': 'multipart/form-data' },
    }

    let requestObject;

    if (file) {
        requestObject = {
            method,
            url,
            data,
            header
        }
    } else {
        requestObject = {
            method,
            url,
            data
        }
    }

    return axios(requestObject)
        .then((res) => {
            next({
                type: `${action.type}_SUCCESS`,
                payload: res.data,
                meta: action.meta,
            });
        })
        .catch((error) => {
            console.log(error)
            next({
                type: `${action.type}_FAILED`,
                meta: action.meta,
            });
        });
};

export default apiMiddleware