import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as newsService from "../../service/newsService";

export const NewsDetails = () => {
    const [currentPost, setCurrentPost] = useState({});

    const { newsId } = useParams();

  useEffect(() => {
        newsService.getOnePost(newsId)
            .then(result => {
                setCurrentPost(result);
            });
     });

  return (
    <div className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-3 wow fadeInLeft">
            <h2 className="title-section">
              {currentPost.title}
            </h2>
            <h5>{currentPost.author}</h5>
            <div className="divider" />
            <p className="mb-5">
            {currentPost.description}
            </p>
            <a href="/" className="btn btn-primary">
              Edit
            </a>
            <a href="/" className="btn btn-outline ml-2">
              Delete
            </a>
          </div>
          {/* <div className="col-lg-6 py-3 wow zoomIn">
            <div className="img-place text-center">
              <img src={currentPost.image} alt="" />
            </div>
          </div> */}
        </div>
      </div>{" "}
    </div>
  );
};
