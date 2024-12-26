import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import { Post } from "../../types.ts";
import { fetchPosts } from "../../services/api.ts";
import styles from "./HomePage.module.scss";

const HomePage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const POSTS_PER_PAGE = 12;

    const loadMorePosts = async () => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);

        try {
            const newPosts = await fetchPosts(currentPage * POSTS_PER_PAGE, POSTS_PER_PAGE);

            if (newPosts.length > 0) {
                setPosts((prevPosts) => [...prevPosts, ...newPosts]);
                setCurrentPage((prevPage) => prevPage + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error loading posts:", error);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        loadMorePosts();
    }, []);

    return (
        <div className={styles.homePage}>
            <h1 className={styles.title}>Posts</h1>
            <div className={styles.postsList}>
                {posts.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))}
            </div>
            {hasMore && (
                <div className={styles.loadMore}>
                    <button onClick={loadMorePosts} disabled={isLoading}>
                        {isLoading ? "Loading..." : "Load More"}
                    </button>
                </div>
            )}
            {!hasMore && <p className={styles.noMorePosts}>No more posts to display</p>}
        </div>
    );
};

export default HomePage;
