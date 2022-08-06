export const Tables = () => {
  return (
    <div>
      <div className="main-container">
        <div className="year-stats">
          <div className="month-group">
            <div className="bar h-100" />
            <p className="month">Jan</p>
          </div>
          <div className="month-group">
            <div className="bar h-50" />
            <p className="month">Feb</p>
          </div>
          <div className="month-group">
            <div className="bar h-75" />
            <p className="month">Mar</p>
          </div>
          <div className="month-group">
            <div className="bar h-25" />
            <p className="month">Apr</p>
          </div>
          <div className="month-group selected">
            <div className="bar h-100" />
            <p className="month">May</p>
          </div>
          <div className="month-group">
            <div className="bar h-50" />
            <p className="month">Jun</p>
          </div>
          <div className="month-group">
            <div className="bar h-75" />
            <p className="month">Jul</p>
          </div>
          <div className="month-group">
            <div className="bar h-25" />
            <p className="month">Aug</p>
          </div>
          <div className="month-group">
            <div className="bar h-50" />
            <p className="month">Sep</p>
          </div>
          <div className="month-group">
            <div className="bar h-75" />
            <p className="month">Oct</p>
          </div>
          <div className="month-group">
            <div className="bar h-25" />
            <p className="month">Nov</p>
          </div>
          <div className="month-group">
            <div className="bar h-100" />
            <p className="month">Dez</p>
          </div>
        </div>
        <div className="stats-info">
          <div className="graph-container">
            <div className="percent">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle"
                  strokeDasharray="100, 100"
                  d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray="85, 100"
                  d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray="60, 100"
                  d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray="30, 100"
                  d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
            <p>Total: 2075lv</p>
          </div>
          <div className="info">
            <p>
              Most expensive category <br />
              <span>Restaurants &amp; Dining</span>
            </p>
            <p>
              Updated categories <span>6</span>
            </p>
            <p>
              Additional costs <span>92lv</span>
            </p>
            <p>
              Top shoppers <span>Amazon, eMag</span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};
