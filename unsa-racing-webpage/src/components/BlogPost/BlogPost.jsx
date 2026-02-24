import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogPosts } from "../../data/blogPosts";
import { getMarkdownContent } from "../../utils/loadMarkdown";
import "./BlogPost.css";

const images = import.meta.glob("../../assets/News/*.{jpg,png,webp}", {
    eager: true,
});

const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const post = blogPosts.find((p) => p.id === slug);

    useEffect(() => {
        if (!post) {
            setError("Post not found");
            setLoading(false);
            return;
        }

        // Load markdown content
        const markdownContent = getMarkdownContent(slug);
        if (markdownContent) {
            setContent(markdownContent);
            setLoading(false);
        } else {
            setError("Post content not found");
            setLoading(false);
        }
    }, [slug, post]);

    if (loading) {
        return (
            <div className="blog-post-container">
                <div className="blog-loading">Loading...</div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="blog-post-container">
                <div className="blog-error">
                    <h2>Post Not Found</h2>
                    <p>The blog post you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const getPostImage = (post) => {
        if (!post.image) return null;
        const relativePath = post.image.replace("../src/", "../../");
        return images[relativePath]?.default || null;
    };

    return (
        <div className="blog-post-container">
            <div className="blog-post-content">
                <article className="blog-post-article">
                    {post.image && (
                        <div className="blog-post-featured-image">
                            <img src={getPostImage(post)} alt={post.title} />
                        </div>
                    )}
                    <header className="blog-post-header">
                        <h1 className="blog-post-title">{post.title}</h1>
                    </header>

                    <div className="blog-post-meta-new">
                        <div className="meta-item meta-date">
                            <span className="blog-date">
                                {formatDate(post.date)}
                            </span>
                        </div>
                        <div className="meta-item meta-author">
                            <span className="blog-author">
                                By {post.author}
                            </span>
                        </div>
                    </div>

                    <div className="blog-post-body">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {content}
                        </ReactMarkdown>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogPost;
