import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-4 pt-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Personal Blog</h5>
            <p>A place to share your thoughts and ideas with the world.</p>
            <div className="mt-4">
              <a href="#!" className="btn btn-outline-light btn-floating m-1">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#!" className="btn btn-outline-light btn-floating m-1">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#!" className="btn btn-outline-light btn-floating m-1">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#!" className="btn btn-outline-light btn-floating m-1">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white no-underline">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/create" className="text-white no-underline">Create Post</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">Categories</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#!" className="text-white no-underline">Technology</a></li>
              <li className="mb-2"><a href="#!" className="text-white no-underline">Lifestyle</a></li>
              <li className="mb-2"><a href="#!" className="text-white no-underline">Travel</a></li>
              <li className="mb-2"><a href="#!" className="text-white no-underline">Food</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">Contact</h6>
            <p className="mb-2">
              <i className="bi bi-geo-alt-fill me-2"></i>123 Blog Street, City, Country
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope-fill me-2"></i>info@personalblog.com
            </p>
            <p className="mb-2">
              <i className="bi bi-phone-fill me-2"></i>+1 234 567 8901
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-3 mt-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © {new Date().getFullYear()} Personal Blog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;