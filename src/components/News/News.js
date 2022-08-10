import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "./Post";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const News = ({ post }) => {
  const [state, setState] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setState(user);
      } else {
        setState(null);
      }
    });
  }, []);

  return (
    <main>
      <div className="page-section">
        <div className="page-section">
          <div className="text-center">
            <div className="subhead"></div>
            <h2 className="title-section">
              <span className="marked">News</span>
            </h2>
            <div className="divider mx-auto" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            
            {post.map((x) => <Post key={x.id} post={x}/>)}

            <div className="col-12 mt-5">
              {
              state &&
                <nav aria-label="Page Navigation">
                  <div className="container">
                    <div className="row mt-5 text-center">
                      <div className="col-lg-4 py-3">
                        <Link to={"/newPost"} className="btn btn-outline border text-secondary">
                          New Post
                        </Link>
                      </div>
                      <div className="col-lg-4 py-3">
                        <Link to={"/dashboard"} className="btn btn-outline border text-secondary">
                          Dashboard
                        </Link>
                      </div>
                      <div className="col-lg-4 py-3">
                        <Link to={"/profile"} className="btn btn-outline border text-secondary">
                          Edit Account
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
