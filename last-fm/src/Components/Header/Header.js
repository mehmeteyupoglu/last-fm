import React from "react";
import { StyledHeader } from "./styles";

const Header = () => {
  const logo = require("../../Assets/unnamed (1).png");
  return (
    <div>
      <StyledHeader>
        <img src={logo} alt="Last Fm logo" className="logo" />
      </StyledHeader>
    </div>
  );
};

export default Header;
