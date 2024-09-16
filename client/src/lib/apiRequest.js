import axios from "axios";

const apiRequest = axios.create({
    // baseURL:"http://localhost:3000/api",
    // baseURL:"https://housenest.onrender.com/api",
    baseURL:"/api",
    withCredentials: true,
});

export default apiRequest;
