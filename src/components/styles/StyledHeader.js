import styled from "styled-components";

// using styled components. export for Header.js to use
export const StyledHeader = styled.div`
background: #1c1c1c;
padding: 0 20px;
box-sizing: border-box;

.header-content{
  max:width: 1280px;
  min-height: 120px;
  padding: 20px 0;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width:500px){
    min-height: 0px;
  }
}`;

export const StyledRMDBLogo = styled.img`
  width: 250px;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 122px;
  margin-top: 25px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;
