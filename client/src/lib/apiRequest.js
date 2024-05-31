import axios from "axios";

const apiRequest = axios.create({
    // baseURL:"http://localhost:3000/api",
    baseURL:"http://housenest.onrender.com/api",
    withCredentials: true,
});

export default apiRequest;