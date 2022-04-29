import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>Oops!</h1>
      <h4>404 - Page Not Found</h4>
      <p>
        The Page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <Link to="/">
        <button>Go To HomePage</button>
      </Link>
    </div>
  );
};

export default NotFound;
