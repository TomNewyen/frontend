import axios from "axios"

const BASE_URL = 'http://localhost:3001/server/'
const TOKEN = currentUser?.accessToken
const user = JSON.parse(localStorage.getItem("persist:root"))?.user
const currentUser = user && JSON.parse(user).currentUser
export const publicRequest = axios.create({
    baseURL: BASE_URL
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});