import { Link } from 'react-router-dom';
import { Tables } from './Tables';

export const Dashboard = () => {
  return (
    <main>
      <div className="page-section"></div>
      <div className="page-section">
        <div className="container">
          <div className="text-center">
            <div className="subhead">Dashboard</div>
            <h2 className="title-section">
              All <span className="marked">Cards</span>
            </h2>
            <div className="divider mx-auto" />
          </div>
          {/* <div className="row mt-5 text-center">
            <div className="col-lg-4 py-3">
            </div>
            <div className="col-lg-4 py-3">
            </div>
          </div> */}
        </div>{" "}
      </div>{" "}
 <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 py-3">
              <div className="card-blog">
                <div className="header">

                  <div className="entry-footer">
                    <div className="post-author">Main Card</div>
                    <a href="/" className="post-date">
                      added: 23 Jan 2020
                    </a>
                  </div>
                </div>
                <div className="body">
                  <div className="post-title">
                    <a href="blog-single.html">VISA</a>
                  </div>
                  <div className="post-excerpt">
                    Bank: World Bank 1<br></br>
                    Nikolay Zhechev <br></br>
                    Valid thru: 10/24
                  </div>
                </div>
                <div className="footer">
                  <a href="blog-single.html">
                    Details <span className="mai-chevron-forward text-sm" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="entry-footer">
                    <div className="post-author">Online Banking</div>
                    <a href="/" className="post-date">
                      added: 10 Apr 2021
                    </a>
                  </div>
                </div>
                <div className="body">
                  <div className="post-title">
                    <a href="blog-single.html">Mastercard</a>
                  </div>
                  <div className="post-excerpt">
                    Bank: Bank of Bulgaria <br></br>
                    Nikolay Zhechev <br></br>
                    Valid thru: 12/22
                  </div>
                </div>
                <div className="footer">
                  <a href="blog-single.html">
                    Details <span className="mai-chevron-forward text-sm" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="entry-footer">
                    <div className="post-author">Primary</div>
                    <a href="#" className="post-date">
                      added 23 Apr 2022
                    </a>
                  </div>
                </div>
                <div className="body">
                  <div className="post-title">
                    <a href="blog-single.html">
                      Maestro
                    </a>
                  </div>
                  <div className="post-excerpt">
                    Bank: Bank of USA <br></br>
                    Nikolay Zhechev <br></br>
                    Valid thru: 10/26
                  </div>
                </div>
                <div className="footer">
                  <a href="blog-single.html">
                    Details <span className="mai-chevron-forward text-sm" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 py-3">
              
            </div>
            <div className="col-md-6 col-lg-4 py-3">
              
            </div>
            <div className="col-md-6 col-lg-4 py-3">
              
            </div>
            <div className="col-md-6 col-lg-4 py-3">
              
            </div>
            <div className="col-md-6 col-lg-4 py-3">
              
            </div>
            <div className="col-md-6 col-lg-4 py-3">
              
            </div>
            
          </div>
        </div>
      </div>
      <div className="page-section">
        <div className="container">
          <div className="text-center">
            <h2 className="title-section">
              All <span className="marked">Expenses</span>
            </h2>
            <div className="divider mx-auto" />
          </div>
          {/* <div className="row mt-5 text-center">
            <div className="col-lg-4 py-3">
            </div>
            <div className="col-lg-4 py-3">
            </div>
          </div> */}
        </div>{" "}
      </div>{" "}

      <div className="page-section">
        <div className="container">
          <Tables/>
        </div>
      </div>{" "}
      
    </main>
  );
};
