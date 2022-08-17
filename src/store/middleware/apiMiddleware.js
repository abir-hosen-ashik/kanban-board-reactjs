import axios from 'axios';
import store from '../index'

const apiMiddleware = () => (next) => (action) => {

    console.log(action)

    next(action);
    
};

export default apiMiddleware