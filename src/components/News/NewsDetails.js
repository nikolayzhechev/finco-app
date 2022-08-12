import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as newsService from "../../service/newsService";
import { getAuth } from "firebase/auth";

export const NewsDetails = () => {
    const [currentPost, setCurrentPost] = useState({});
    const { newsId } = useParams();

    const auth = getAuth();
    const user = auth.currentUser;
    let isAuth = false;
    
    if(user){
      isAuth = user.uid === currentPost.uid;
    }

  useEffect(() => {
        newsService.getOnePost(newsId)
            .then(result => {
                setCurrentPost(result);
            }).catch(err => {
              console.log(err);
            });
     }, []);

  return (
    <div className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-3 wow fadeInLeft">
            <h2 className="title-section">
              {currentPost && currentPost.title}
            </h2>
            <h5>{currentPost && currentPost.author}</h5>
            <div className="divider" />
            <p className="mb-5">
            {currentPost && currentPost.description}
            </p>
              {
              isAuth &&
                <div>
                  <Link to={`/news/${currentPost.id}/edit`} className="btn btn-primary">
                    Edit
                  </Link>
                  <Link to={`/newsDelete/${newsId}`} className="btn btn-outline ml-2">
                    Delete
                  </Link>
                </div>
              }
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
