import axios from "axios"

const BASE_URL = 'http://localhost:3001/server/'


const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTRhZTExNGJkYzgzYzFmODliNjIyYyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTQ5NTk2NDAsImV4cCI6MTY1NTIxODg0MH0.GLxdUOVJdsFBjq17dM512z_KlrvSYTUXwiKsbyWFelk';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});