import axios from 'axios';
const apiRoot =
    process.env.REACT_APP_API_ROOT || 'http://localhost:4000/api';

const post = (uri: string, data: any) => {
    return axios.post(apiRoot + uri, data);
};
export { post };