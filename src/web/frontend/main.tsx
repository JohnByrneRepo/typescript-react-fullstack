import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Page } from "../routes/Page";
import "./style.css";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("A");

  const pageA = selectedPage === 'A' ? 'selected' : '';
  const pageB = selectedPage === 'B' ? 'selected' : '';
  const pageC = selectedPage === 'C' ? 'selected' : '';

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/page-a">
            <button
              className={pageA}
              onClick={() => {
                setSelectedPage("A");
              }}
            >
              Page A
            </button>
          </Link>
          <Link to="/page-b">
            <button
              className={pageB}
              onClick={() => {
                setSelectedPage("B");
              }}
            >
              Page B
            </button>
          </Link>
          <Link to="/page-c">
            <button
              className={pageC}
              onClick={() => {
                setSelectedPage("C");
              }}
            >
              Page C
            </button>
          </Link>
        </header>
        <div>
          <Route exact path="/:page" component={Page} />
          <Route exact path="/" component={Page} />
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
