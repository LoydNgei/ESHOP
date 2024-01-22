import axios from 'axios';

const BASE_URL = "https://eshopcentre.vercel.app/api";

const TOKEN = ""; //SHALL COPY ACCESS TOKEN FROM LOGIN

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`Bearer ${TOKEN}`}
})