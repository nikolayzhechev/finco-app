import { updateOnePost } from "../../service/newsService";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const EditPost = () => {
    const { newsId } = useParams();

    const onSubmit = (e) => {
        e.preventDefault();

        const newsData = Object.fromEntries(new FormData(e.target));

        updateOnePost(newsId, newsData);
    }

  return (
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Form */}
          <div className="col-lg-6 py-3">
            <div className="subhead"></div>
            <h2 className="title-section">Edit Current News Post</h2>
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
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>{" "}
      {/* .container */}
    </div>
  );
};
