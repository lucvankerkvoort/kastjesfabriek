import React from "react";
import Images from "../../Images/images";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="footer-contact">
          <p>Kastjesfabriek</p>
          <p>Tel: 0628779915</p>
          <p>Email: corindafokkema@hotmail.com</p>
        </div>
        <div className="misc">
          <div className="links">
            <a
              href="https://www.instagram.com/kastjes.fabriek/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Images.instagram}
                alt="insta"
                width="36px"
                height="36px"
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
                width="30px"
                height="30px"
              />
            </a>
          </div>
          <p>© 2020, Kastjes Fabriek created by Luc van Kerkvoort</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
