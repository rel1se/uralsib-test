import React from "react";
import {Post, Comment} from "../../types.ts";

import styles from './PostDetails.module.scss'

interface PostDetailsProps {
    post: Post;
    comments: Comment[];
}

const PostDetails: React.FC<PostDetailsProps> = ({post, comments}: PostDetailsProps) => {
    return (
        <div className={styles.postDetails}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>{comments.length} comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <strong>@{comment.name}:</strong>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostDetails;