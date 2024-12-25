import axios from "axios";
import {Post, Comment} from "../types.ts";

const API_URL = 'https://jsonplaceholder.typicode.com'


export const fetchPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.get<Post[]>(`${API_URL}/posts`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export const fetchPostDetails = async (postId: number): Promise<{ post: Post; comments: Comment[] }> => {
    try {
        const post = await axios.get<Post>(`${API_URL}/posts/${postId}`);
        const comments = await axios.get<Comment[]>(`${API_URL}/comments?postId=${postId}`);
        return { post: post.data, comments: comments.data };
    }
    catch (error){
        console.error(error);
    }
}