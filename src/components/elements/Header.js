import React from "react";
import { Link } from "@reach/router";
// import resources
import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";
import { StyledHeader, StyledRMDBLogo, StyledTMDBLogo } from "../styles/StyledHeader";

const Header = () => (
  <StyledHeader>
    <div>
      <div className="header-content">
        <Link to="/">
          <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
      </div>
    </div>
  </StyledHeader>
);

export default Header;
