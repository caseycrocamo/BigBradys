const axios = require('axios');
const apiRoot = 'http://localhost:4000/api';
const post = (uri:string, data:any) => {
    return axios.post(apiRoot + uri, data);
}
export {post};