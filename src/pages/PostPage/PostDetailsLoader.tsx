import React from "react";
import ContentLoader from "react-content-loader";

const PostDetailsLoader: React.FC = () => {
    const isMobile = window.innerWidth <= 512;

    const mobileLoader = (
        <ContentLoader
            speed={2}
            width="100%"
            height={1000}
            viewBox="0 0 100% 300"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="10" rx="5" ry="5" width="90%" height="120" />

            <rect x="0" y="190" rx="5" ry="5" width="100%" height="100" />

            <rect x="0" y="300" rx="5" ry="5" width="70%" height="" />
            <rect x="0" y="330" rx="5" ry="5" width="90%" height="16" />

            <rect x="0" y="360" rx="5" ry="5" width="50%" height="16" />
            <rect x="0" y="390" rx="5" ry="5" width="90%" height="16" />
        </ContentLoader>
    );

    const desktopLoader = (
        <ContentLoader
            speed={2}
            width="100%"
            height={400}
            viewBox="0 0 100% 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="10" rx="5" ry="5" width="70%" height="36" />

            <rect x="0" y="70" rx="5" ry="5" width="100%" height="48" />

            <rect x="0" y="150" rx="5" ry="5" width="10%" height="20" />

            <rect x="0" y="190" rx="5" ry="5" width="40%" height="16" />
            <rect x="0" y="250" rx="5" ry="5" width="95%" height="16" />

            <rect x="0" y="280" rx="5" ry="5" width="40%" height="16" />
            <rect x="0" y="340" rx="5" ry="5" width="95%" height="16" />

            <rect x="0" y="370" rx="5" ry="5" width="40%" height="16" />
            <rect x="0" y="430" rx="5" ry="5" width="95%" height="16" />
        </ContentLoader>
    );
    return isMobile ? mobileLoader : desktopLoader;
};

export default PostDetailsLoader;
