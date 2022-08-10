import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addNewsService } from "../../service/newsService";
import { NewsPostContext } from "../../context/NewsPostContext";

export const CreateNewsPost = () => {
    const { newsAdd } = useContext(NewsPostContext);
    const navigate = useNavigate();
    
    const onSubmit = (e) => {
        e.preventDefault();

        const newsData = Object.fromEntries(new FormData(e.target));

        addNewsService(newsData)
          .then(result => {
            newsAdd(result);
          });

        navigate('/news');
    }

  return (
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Form */}
          <div className="col-lg-6 py-3">
            <div className="subhead"></div>
            <h2 className="title-section">Add a News Post</h2>
            <div className="divider" />
            <form onSubmit={onSubmit}>
              <label htmlFor="author">
                <b>Author</b>
              </label>
              <div className="py-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Author Names"
                  name="author"
                  required
                />
              </div>
              <div className="py-2">
                <label htmlFor="title">
                  <b>Title</b>
                </label>
                <input
                  type="text"
                  placeholder="News Post Title"
                  name="title"
                  className="form-control"
                />
              </div>
              <div className="py-2">
                <label htmlFor="description">
                  <b>Description</b>
                </label>
                <input
                  type="text"
                  placeholder="News Post Description"
                  name="description"
                  className="form-control"
                  required
                />
              </div>
              <div className="py-2">
                <label htmlFor="image">
                  <b>Image</b>
                </label>
                <input
                  type="text"
                  placeholder="Author Image"
                  name="image"
                  className="form-control"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary rounded-pill mt-4"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>{" "}
      {/* .container */}
    </div>
  );
};
