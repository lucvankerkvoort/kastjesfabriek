import React from "react";
import Images from "../../Images/images";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="links">
          <a
            href="https://www.instagram.com/kastjes.fabriek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Images.instagram}
              alt="insta"
              width="48px"
              height="48px"
            />
          </a>

          <a
            href="https://www.facebook.com/Kastjesfabriek-106661461115300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Images.facebook}
              alt="facebook"
              width="48px"
              height="48px"
            />
          </a>
        </div>
        <p>© 2020, Kastjes Fabriek created by Luc van Kerkvoort</p>
      </div>
    </div>
  );
};

export default Footer;
