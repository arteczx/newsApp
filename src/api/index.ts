import axios from 'axios';
const BASE_URL = 'https://newsapi.org/v2/';

export const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'X-APi-key': '<fb5d8590926844af9b5b6bd21d2ea3a9>'
    },
});