export const About = () => {
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
                We're <span className="marked">Dynamic</span> Team of Creatives
                People
              </h2>
              <div className="divider" />
              <p>
                We provide marketing services to startups &amp; small business
                to looking for partner for their digital media, design &amp; dev
                lead generation &amp; communication.
              </p>
              <a href="#" className="btn btn-primary">
                More Details
              </a>
              <a href="#" className="btn btn-outline border ml-2">
                Success Stories
              </a>
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
              <p>Total Invest</p>
              <h2>
                $<span className="number" data-number={816278} />
              </h2>
            </div>
            <div className="col-lg-4">
              <p>Yearly Revenue</p>
              <h2>
                $<span className="number" data-number={216422} />
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
      {/* Testimonials */}
      <div className="page-section bg-light">
        <div className="container">
          <div className="owl-carousel" id="testimonials">
            <div className="item">
              <div className="row align-items-center">
                <div className="col-md-6 py-3">
                  <div className="testi-image">
                    <img src="./images/person/person_1.jpg" alt />
                  </div>
                </div>
                <div className="col-md-6 py-3">
                  <div className="testi-content">
                    <p>
                      Necessitatibus ipsum magni accusantium consequatur
                      delectus a repudiandae nemo quisquam dolorum itaque,
                      tenetur, esse optio eveniet beatae explicabo sapiente quo.
                    </p>
                    <div className="entry-footer">
                      <strong>Melvin Platje</strong> —{" "}
                      <span className="text-grey">CEO Slurin Group</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row align-items-center">
                <div className="col-md-6 py-3">
                  <div className="testi-image">
                    <img src="./images/person/person_2.jpg" alt />
                  </div>
                </div>
                <div className="col-md-6 py-3">
                  <div className="testi-content">
                    <p>
                      Repudiandae vero assumenda sequi labore ipsum eos ducimus
                      provident a nam vitae et, dolorum temporibus inventore
                      quaerat consectetur quos! Animi, qui ratione?
                    </p>
                    <div className="entry-footer">
                      <strong>George Burke</strong> —{" "}
                      <span className="text-grey">CEO Letro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* .container */}
      </div>{" "}

      {/* .page-section */}
      <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <h2 className="title-section">Get in Touch</h2>
              <div className="divider" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Laborum ratione autem quidem veritatis!
              </p>
              <ul className="contact-list">
                <li>
                  <div className="icon">
                    <span className="mai-map" />
                  </div>
                  <div className="content">123 Fake Street, New York, USA</div>
                </li>
                <li>
                  <div className="icon">
                    <span className="mai-mail" />
                  </div>
                  <div className="content">
                    <a href="#">info@digigram.com</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="mai-phone-portrait" />
                  </div>
                  <div className="content">
                    <a href="#">+00 1122 3344 55</a>
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
