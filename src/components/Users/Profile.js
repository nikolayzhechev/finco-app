import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

export const Profile = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setProfile(user);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");

    updateProfile(auth.currentUser, {
      email: email,
    })
      .then(navigate("/dashboard"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Form */}
          <div className="col-lg-6 py-3">
            <div className="subhead"></div>
            <h2 className="title-section">Edit Account</h2>
            <div className="divider" />
            <form onSubmit={onSubmit}>
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <div className="py-2">
                <input
                  type="text"
                  className="form-control"
                  defaultValue={profile.email}
                  name="email"
                />
              </div>
              <div className="py-2">
                <label htmlFor="name">
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  name="number"
                  className="form-control"
                  required
                />
              </div>
              <div className="py-2">
                <label htmlFor="img">
                  <b>Image</b>
                </label>
                <input type="text" name="valid" className="form-control" />
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
