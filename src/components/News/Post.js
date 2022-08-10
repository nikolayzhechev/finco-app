import { Link } from 'react-router-dom';

export const Post = ({ post }) => {
  return (
    <div className="col-md-6 col-lg-4 py-3">
      <div className="card-blog">
        <div className="header">
          <div className="avatar">
            <img src={post.image} alt="img" />
          </div>
          <div className="entry-footer">
            <div className="post-author">{post.author}</div>
              23 Apr 2020
          </div>
        </div>
        <div className="body">
          <div className="post-title">
            <Link to={`/news/${post.id}`}>{post.title}</Link>
          </div>
          <div className="post-excerpt">
            {post.description}
          </div>
        </div>
        <div className="footer">
          <Link to={`/news/${post.id}`}>
            More <span className="mai-chevron-forward text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
};
