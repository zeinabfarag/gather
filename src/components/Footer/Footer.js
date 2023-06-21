import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <a className="footer-link" href="https://google.com">
        Contact us
      </a>
      <div className="footer-text">
        Gather. {new Date().getFullYear()}. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
