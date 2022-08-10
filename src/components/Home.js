import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main>
      <div className="page-banner home-banner">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-6 py-3 wow fadeInUp">
              <h1 className="mb-4">
                Personal finance app
              </h1>
              <p className="text-lg mb-5">
                Get access to powerfull financial tools and manage your wallet and expenses
              </p>
              <Link to={"/about"} className="btn btn-outline border text-secondary">
                More Info
              </Link>
              <Link to={"/register"} className="btn btn-primary btn-split ml-2">
                Sign Up{" "}
                <div className="fab">
                  <span className="mai-play" />
                </div>
              </Link>
            </div>
            <div className="col-lg-6 py-3 wow zoomIn">
              <div className="img-place">
                <img src='./images/bg_image_1.png' alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
              <div className="d-flex flex-row">
                <div className="img-fluid mr-3">
                  <img src="./images/icon_pattern.svg" alt="" />
                </div>
                <div>
                  <h5>All in One Place.</h5>
                  <p>All your accounts are linked, cash accounts, credit cards, investments, and bills.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
              <div className="d-flex flex-row">
                <div className="img-fluid mr-3">
                  <img src="./images/icon_pattern.svg" alt="" />
                </div>
                <div>
                  <h5>Track What You Spend</h5>
                  <p>Plan and use out of the box solutions to highlight and improve what you spend.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
              <div className="d-flex flex-row">
                <div className="img-fluid mr-3">
                  <img src="./images/icon_pattern.svg" alt="" />
                </div>
                <div>
                  <h5>Get Financial Advice by our Advisor</h5>
                  <p>Expense calculator and tracker with monthly consulations.</p>
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
          <div className="row">
            <div className="col-lg-6 py-3 wow zoomIn">
              <div className="img-place text-center">
                <img src="../images/bg_image_2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 py-3 wow fadeInRight">
              <h2 className="title-section">
                Keep <span className="marked">More</span> of What you Earn
              </h2>
              <div className="divider" />
              <p>
                Track income and expenses, manage bills, send invoices, track mileage, and more on the go from any device.
                Powerful invoicing with custom reminders, tracking, and direct deposit
              </p>
              <div className="img-place mb-3">
                <img src="./images/testi_image.png" alt="" />
              </div>
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
              <p>Average Income Calculated</p>
              <h2>
                $<span className="number" data-number={22278} />
              </h2>
            </div>
            <div className="col-lg-4">
              <p>Avarage Savings</p>
              <h2>
                $<span className="number" data-number={5422} />
              </h2>
            </div>
            <div className="col-lg-4">
              <p>Total Savings</p>
              <h2>
                <span className="number" data-number={52} />%
              </h2>
            </div>
          </div>
        </div>{" "}
        {/* .container */}
      </div>{" "}
      {/* .page-section */}
      <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-3 wow fadeInLeft">
              <h2 className="title-section">
                <span className="marked">Track </span> Income &amp; Expenses
              </h2>
              <div className="divider" />
              <p className="mb-5">
                Know where your money is going and automatically sort transactions. Get advanced but easy to use dashboard charts and details. 
              </p>
              <Link to={"/about"} className="btn btn-primary">
                More Details
              </Link>
            </div>
            <div className="col-lg-6 py-3 wow zoomIn">
              <div className="img-place text-center">
                <img src="./images/bg_image_3.png" alt="" />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* .container */}
      </div>{" "}
      {/* .page-section */}
      <div className="page-section">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="subhead">Why Choose Us</div>
            <h2 className="title-section">
              Your <span className="marked">Comfort</span> is Our Priority
            </h2>
            <div className="divider mx-auto" />
          </div>
          <div className="row mt-5 text-center">
            <div className="col-lg-4 py-3 wow fadeInUp">
              <div className="display-3">
                <span className="mai-shapes" />
              </div>
              <h5>Individuals</h5>
              <p>
                Experience tailored to individual needs with mostly free of charge.
              </p>
            </div>
            <div className="col-lg-4 py-3 wow fadeInUp">
              <div className="display-3">
                <span className="mai-shapes" />
              </div>
              <h5>Businesses</h5>
              <p>
                With more than 150k companies already using finco. we strive for business success.
              </p>
            </div>
            <div className="col-lg-4 py-3 wow fadeInUp">
              <div className="display-3">
                <span className="mai-shapes" />
              </div>
              <h5>Partners and developers</h5>
              <p>
                Excellent partner network and outstanding payment solutions.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* .container */}
      </div>{" "}

    {/* REMOVED/ OPTIONAL SECTION */}

      {/* .page-section */}
      {/* <div className="page-section border-top">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <h2 className="title-section">Pricing Plan</h2>
            <div className="divider mx-auto" />
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-auto py-3 wow fadeInLeft">
              <div className="card-pricing">
                <div className="header">
                  <div className="price-icon">
                    <span className="mai-people" />
                  </div>
                  <div className="price-title">Membership</div>
                </div>
                <div className="body py-3">
                  <div className="price-tag">
                    <span className="currency"></span>
                    <h2 className="display-4">Free</h2>
                    <span className="period"></span>
                  </div>
                  <div className="price-info">
                    <p>Choose the plan that right for you</p>
                  </div>
                </div>
                <div className="footer">
                  <a href="#" className="btn btn-outline rounded-pill">
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-auto py-3 wow fadeInUp">
              <div className="card-pricing active">
                <div className="header">
                  <div className="price-labled">Best</div>
                  <div className="price-icon">
                    <span className="mai-business" />
                  </div>
                  <div className="price-title">Dedicated</div>
                </div>
                <div className="body py-3">
                  <div className="price-tag">
                    <span className="currency">$</span>
                    <h2 className="display-4">60</h2>
                    <span className="period">/monthly</span>
                  </div>
                  <div className="price-info">
                    <p>Choose the plan that right for you</p>
                  </div>
                </div>
                <div className="footer">
                  <a href="#" className="btn btn-outline rounded-pill">
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-auto py-3 wow fadeInRight">
              <div className="card-pricing">
                <div className="header">
                  <div className="price-icon">
                    <span className="mai-rocket-outline" />
                  </div>
                  <div className="price-title">Private</div>
                </div>
                <div className="body py-3">
                  <div className="price-tag">
                    <span className="currency">$</span>
                    <h2 className="display-4">90</h2>
                    <span className="period">/monthly</span>
                  </div>
                  <div className="price-info">
                    <p>Choose the plan that right for you</p>
                  </div>
                </div>
                <div className="footer">
                  <a href="#" className="btn btn-outline rounded-pill">
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* .container */}
      {/* </div>{" "} */}
      {/* .page-section */}
      {/* <div className="page-section bg-light">
        <div className="container">
          <div className="owl-carousel wow fadeInUp" id="testimonials">
            <div className="item">
              <div className="row align-items-center">
                <div className="col-md-6 py-3">
                  <div className="testi-image">
                    <img src="./images/person/person_1.jpg" alt="" />
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
                    <img src="./images/person/person_2.jpg" alt="" />
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
      {/* </div>{" "} */}
      {/* .page-section */}

      <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3 wow fadeInUp">
              <h2 className="title-section">fin<span className="text-primary">co.</span></h2>
              <div className="divider" />
              <p>
                The finance partner
                <br /> that let's you focus on the important.
              </p>
            </div>
            <div className="col-lg-6 py-3 wow fadeInUp">
              <div className="subhead">Register for free</div>
              <h2 className="title-section">Start Saving Today</h2>
              <div className="divider" />

              <Link to={"/register"}>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill mt-4"
                  >
                      Sign Up
                  </button>
                </Link>

            </div>
          </div>
        </div>{" "}
        {/* .container */}
      </div>{" "}
      {/* .page-section */}
      <div className="page-section border-top">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="subhead">Our Blog</div>
            <h2 className="title-section">
              Read our latest <span className="marked">News</span>
            </h2>
            <div className="divider mx-auto" />
          </div>
          <div className="text-center">
            <Link
              to={"/news"}
              className="btn btn-outline-primary rounded-pill"
            >
              Discover More
            </Link>
          </div>
        </div>{" "}
        {/* .container */}
      </div>{" "}
      {/* .page-section */}
      <div className="page-section client-section">
        <div className="container-fluid">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
            <div className="item wow zoomIn">
              <img src="./images/clients/airbnb.png" alt="" />
            </div>
            <div className="item wow zoomIn">
              <img src="./images/clients/google.png" alt="" />
            </div>
            <div className="item wow zoomIn">
              <img src="./images/clients/stripe.png" alt="" />
            </div>
            <div className="item wow zoomIn">
              <img src="./images/clients/paypal.png" alt="" />
            </div>
            <div className="item wow zoomIn">
              <img src="./images/clients/mailchimp.png" alt="" />
            </div>
          </div>
        </div>{" "}
        {/* .container-fluid */}
      </div>{" "}
      {/* .page-section */}
    </main>
  );
};
