import { Link } from 'react-router-dom';

export const Post = ({ post }) => {
  return (
    <div className="col-md-6 col-lg-4 py-3">
      <div className="card-blog">
        <div className="header">
          <div className="avatar">
            <img src={post.image} alt />
          </div>
          <div className="entry-footer">
            <div className="post-author">{post.author}</div>
            <a href="#" className="post-date">
              23 Apr 2020
            </a>
          </div>
        </div>
        <div className="body">
          <div className="post-title">
            <Link to={`/news/${post.id}/details`}>{post.title}</Link>
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
