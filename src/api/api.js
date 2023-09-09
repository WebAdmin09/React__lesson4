import axios from 'axios';

const request = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2f899963eab84f428478b52cffd6ed1d',
    timeOut: 10000,
})

export default request;
