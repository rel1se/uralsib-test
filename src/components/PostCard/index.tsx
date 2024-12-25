import {Link} from "react-router-dom";
import {Post} from "../../types.ts";
import React from "react";

import styles from "./PostCard.module.scss";

const PostCard: React.FC<Post> = ({id, title, body}) => {
    return (
        <Link to={`/post/${id}`}>
            <div className={styles.postCard}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </Link>

    )
}

export default PostCard;