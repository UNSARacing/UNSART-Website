import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import './News.css';

const News = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="news-page">
      <div className="news-container">
        <header className="news-header">
          <h1 className="news-page-title">News & Updates</h1>
        </header>

        <div className="blog-posts-list">
          {sortedPosts.map((post) => (
            <Link key={post.id} to={`/news/${post.id}`} className="blog-post-card">
              <div className="post-image-container">
                <img 
                  src={post.image || '../src/assets/Home/team-photo.jpg'} 
                  alt={post.title}
                  className="post-image"
                />
              </div>
              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <div className="post-date">{formatDate(post.date)}</div>
                <p className="post-excerpt">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {sortedPosts.length === 0 && (
          <div className="no-posts">
            <p>No blog posts available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
