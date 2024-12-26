import axios from "axios";
import {Post, Comment} from "../types.ts";

const API_URL = 'https://jsonplaceholder.typicode.com'


export const fetchPosts = async (start: number, limit: number): Promise<Post[]> => {
    try {
        console.log(start, limit)
        const response = await axios.get<Post[]>(`${API_URL}/posts?_start=${start}&_limit=${limit}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}

export const fetchPostDetails = async (postId: number): Promise<{ post: Post; comments: Comment[] }> => {
    try {
        const post = await axios.get<Post>(`${API_URL}/posts/${postId}`);
        const comments = await axios.get<Comment[]>(`${API_URL}/posts/${postId}/comments`);
        return { post: post.data, comments: comments.data };
    }
    catch (error){
        console.error(error);
        return { post: {} as Post, comments: [] }
    }
}