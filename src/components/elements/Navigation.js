import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import { StyledNavigation } from "../styles/StyledNavigation";

function Navigation({ movie }) {
  return (
    <>
      <StyledNavigation>
        <div className="navigation-content">
          <Link to="/">
            <p>Home | {movie}</p>
          </Link>
        </div>
      </StyledNavigation>
    </>
  );
}

// validate proptypes
Navigation.propTypes = {
  movie: PropTypes.string
};

export default Navigation;
