import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogPosts } from '../../data/blogPosts';
import { getMarkdownContent } from '../../utils/loadMarkdown';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const post = blogPosts.find(p => p.id === slug);

  useEffect(() => {
    if (!post) {
      setError('Post not found');
      setLoading(false);
      return;
    }

    // Load markdown content
    const markdownContent = getMarkdownContent(slug);
    if (markdownContent) {
      setContent(markdownContent);
      setLoading(false);
    } else {
      setError('Post content not found');
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
          <Link to="/news" className="back-link">← Back to News</Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="blog-post-container">
      <div className="blog-post-content">
        <Link to="/news" className="back-link">← Back to News</Link>
        
        <article className="blog-post-article">
          <header className="blog-post-header">
            {post.category && (
              <span className="blog-category">{post.category}</span>
            )}
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-date">{formatDate(post.date)}</span>
              <span className="blog-author">By {post.author}</span>
            </div>
          </header>

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

