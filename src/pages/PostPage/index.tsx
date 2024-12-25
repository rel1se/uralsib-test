import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Post, Comment} from "../../types.ts";
import {fetchPostDetails} from "../../services/api.ts";
import PostDetails from "../../components/PostDetails";

import styles from "./PostPage.module.scss";

const PostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        if (id) {
            fetchPostDetails(Number(id)).then(data => {
                setPost(data.post);
                setComments(data.comments);
            });
        }
    }, [id]);

    if (!post) return (
        <p className={styles.loading}>
            Loading...
        </p>
    )

    return <PostDetails post={post} comments={comments} />;
}

export default PostPage;