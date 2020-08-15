import React from "react";
import { StyledHeroImage } from "../styles/StyledHeroImage"; // styled component

// receive props from Home.js
const HeroImage = ({ image, title, text }) => (
  // use styled component
  <StyledHeroImage image={image}>
    <div className="heroimage-content">
      <div className="heroimage-text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  </StyledHeroImage>
);

export default HeroImage;
