export const CardItem = ({card}) => {
  return (
    <div className="col-md-6 col-lg-4 py-3">
      <div className="card-blog">
        <div className="header">
          <div className="entry-footer">
            <div className="post-author">{card.type}</div>
            <a href="/" className="post-date">
              added: 23 Jan 2020
            </a>
          </div>
        </div>
        <div className="body">
          <div className="post-title">
            <a href="blog-single.html">{card.bankType}</a>
          </div>
          <div className="post-excerpt">
            Bank: {card.bank}<br></br>
            {card.owner} <br></br>
            Valid thru: {card.valid}
          </div>
        </div>
        <div className="footer">
          <a href="blog-single.html">
            Details <span className="mai-chevron-forward text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
};
