import { useEffect } from "react";

export const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main>
      <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <div className="img-fluid text-center">
                <img src="./images/bg_image_2.png" alt />
              </div>
            </div>
            <div className="col-lg-6 py-3 pr-lg-5">
              <h2 className="title-section">
                A <span className="marked">Dynamic</span> Team of
                People
              </h2>
              <div className="divider" />
              <p>
                Creating apps which are based on research and specific criteria aimed to
                solve the needs and problems of individuals and our customers.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* .container */}
      </div>{" "}
      {/* .page-section */}
      <div className="page-section counter-section">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-4">
              <p>Investments in finco.</p>
              <h2>
                $<span className="number" data-number={1816278} />
              </h2>
            </div>
            <div className="col-lg-4">
              <p>Yearly Revenue</p>
              <h2>
                $<span className="number" data-number={916422} />
              </h2>
            </div>
            <div className="col-lg-4">
              <p>Growth Ration</p>
              <h2>
                <span className="number" data-number={73} />%
              </h2>
            </div>
          </div>
        </div>{" "}
        {/* .container */}
      </div>{" "}
      {/* .page-section */}

      {/* .page-section */}
      <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <h2 className="title-section">Get in Touch</h2>
              <div className="divider" />
              <ul className="contact-list">
                <li>
                  <div className="icon">
                    <span className="mai-map" />
                  </div>
                  <div className="content">Sofia Street, Sofia, Bulgaria</div>
                </li>
                <li>
                  <div className="icon">
                    <span className="mai-mail" />
                  </div>
                  <div className="content">
                    <a href="#">info@finco.io</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="mai-phone-portrait" />
                  </div>
                  <div className="content">
                    <a href="#">+359 999 334 55</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 py-3">
              <div className="subhead">Contact Us</div>
              <h2 className="title-section">Drop Us a Line</h2>
              <div className="divider" />
              <form action="#">
                <div className="py-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                  />
                </div>
                <div className="py-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="py-2">
                  <textarea
                    rows={6}
                    className="form-control"
                    placeholder="Enter message"
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>{" "}
        {/* .container */}
      </div>{" "}
      {/* .page-section */}

           {/* .page-section */}
           <div className="page-section client-section">
        <div className="container-fluid">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
            <div className="item">
              <img src="./images/clients/airbnb.png" alt />
            </div>
            <div className="item">
              <img src="./images/clients/google.png" alt />
            </div>
            <div className="item">
              <img src="./images/clients/stripe.png" alt />
            </div>
            <div className="item">
              <img src="./images/clients/paypal.png" alt />
            </div>
            <div className="item">
              <img src="./images/clients/mailchimp.png" alt />
            </div>
          </div>
        </div>{" "}
        {/* .container-fluid */}
      </div>{" "}
    </main>
  );
};
