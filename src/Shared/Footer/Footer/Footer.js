import React, { useContext } from "react";
import { userContext } from "../../../App";
import CopyRight from "../CopyRight/CopyRight";
import FooterBottom from "../FooterBottom/FooterBottom";
import FooterTop from "../FooterTop/FooterTop";
import "./Footer.css";

const Footer = () => {
  const [loggedIn, setLoggedIn] = useContext(userContext);
  return (
    <footer id="contact">
      {/* footer for not logged in user */}
     {!loggedIn.isLoggedIn ? 
     <div className="footer">
        <div className="container d-flex flex-column align-items-center">
          <FooterTop />
          <FooterBottom />
          <CopyRight />
        </div>
      </div> : 
      <div style={{backgroundColor:"#101c32", height:"400px"}}>
        <div className="container d-flex flex-column align-items-center">
          <FooterBottom />
          <CopyRight />
        </div>
      </div> }
      {/* footer for logged in user */}
      {/* {loggedIn.isLoggedIn &&} */}
    </footer>
  );
};

export default Footer;
