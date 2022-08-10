import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NewsPostContext } from "../../context/NewsPostContext";
import { deleteOnePost, getAllPosts } from "../../service/newsService";

export const DeletePost = () => {
  const navigate = useNavigate();
  const { newsId } = useParams();
  const { newsDel } = useContext(NewsPostContext);

  useEffect(() => {
    deleteOnePost(newsId);
    getAllPosts()
      .then((result) => {
        newsDel(result);
      })
      .then(navigate("/news"));
  });

  return null;
};
