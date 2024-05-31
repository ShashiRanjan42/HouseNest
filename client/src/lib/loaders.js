import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
    try {
        const res = await apiRequest("/posts/" + params.id);
        return res.data;
    } catch (error) {
        console.error("Failed to fetch single post:", error);
        throw error; // Re-throw the error to be caught by the caller
    }
};

export const listPageLoader = async ({ request, params }) => {
    try {
        const query = request.url.split("?")[1];
        const postPromise = apiRequest("/posts?" + query);
        return postPromise;
    } catch (error) {
        console.error("Failed to fetch post list:", error);
        throw error; // Re-throw the error to be caught by the caller
    }
};
  
export const profilePageLoader = async () => {
    try {
        const postPromise = apiRequest("/users/profilePosts");
        const chatPromise = apiRequest("/chats");
        return defer({
            postResponse: postPromise,
            chatResponse: chatPromise,
        });
    } catch (error) {
        console.error("Failed to fetch user profile:", error);
        throw error; // Re-throw the error to be caught by the caller
    }
};



// import { defer } from "react-router-dom";
// import apiRequest from "./apiRequest"

// export const singlePageLoader = async ({ request, params }) => {
//     const res = await apiRequest("/posts/" + params.id);
//     return res.data;
// };

// export const listPageLoader = async ({ request, params }) => {
//     const query = request.url.split("?")[1];
//     const postPromise = apiRequest("/posts?" + query);
//     return defer({
//       postResponse: postPromise,
//     });
//     // return postPromise.data;
// };
  
// export const profilePageLoader = async () => {
//     const postPromise = apiRequest("/users/profilePosts");
//     const chatPromise = apiRequest("/chats");
//     return defer({
//       postResponse: postPromise,
//       chatResponse: chatPromise,
//     });
// };
  