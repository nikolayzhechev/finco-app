import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="col-lg-6 py-3 wow fadeInRight">
          <h2 className="title-section">
            404 <span className="marked">Not Found</span>
          </h2>
          <div className="img-place mb-3">
            <img src="../images/page-not-found.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
