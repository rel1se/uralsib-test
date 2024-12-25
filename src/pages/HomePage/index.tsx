import PostCard from "../../components/PostCard";
import React, {useEffect, useState} from "react";
import {Post} from "../../types.ts";
import {fetchPosts} from "../../services/api.ts";

import styles from './HomePage.module.scss'

const HomePage: React.FC = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetchPosts().then(setPosts)
    }, [])

    if (!posts)
        return (
            <p className={styles.loading}>
                Loading...
            </p>
        )
    return (
        <div className={styles.homePage}>
            <h1 className={styles.title}>Posts</h1>
            <div className={styles.postsList}>
                {posts.map(post => (
                    <PostCard key={post.id} {...post} />
                ))}
            </div>
        </div>
    )
}

export default HomePage;