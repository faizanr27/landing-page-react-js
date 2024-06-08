import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          
          <div className="footer-links">
            <div className="links-group">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Content</a></li>
                <li><a href="#">How it Works</a></li>
                <li><a href="#">Create</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Terms & Services</a></li>
              </ul>
            </div>
            <div className="links-group">
              <h4>Community</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Suggestions</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Newsletters</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
        <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
          
        </div>
        <p>Copyright &copy; 2024 InnoSoft Solutions. All Rights Reserved.</p>
          
      </div>
    </footer>
  );
};

export default Footer;

