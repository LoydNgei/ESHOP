import axios from 'axios';

const BASE_URL = "http://localhost:4000/api/";

const TOKEN = ""; //SHALL COPY ACCESS TOKEN FROM LOGIN

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})