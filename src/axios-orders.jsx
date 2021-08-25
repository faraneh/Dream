import axios from 'axios';

const instance = axios.create ({
    baseURL : 'https://dream-64a94-default-rtdb.firebaseio.com/'
});

export default instance;