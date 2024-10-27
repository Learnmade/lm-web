import React from "react";
import { Link } from "react-router-dom";
import { FaInstagramSquare , FaFacebookSquare} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 p-6 md:p-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">About Us</h2>
          <p className="text-sm">
            We bring you the latest news and trends from around the world, covering technology, science, environment, and more.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#services" className="hover:text-blue-400">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li>Phone: +91 676776776</li>
            <li>Email: jeyasuryalearnmade.in@gmail.com</li>
            <li>Address: City, Country</li>
          </ul>
        </div>
        
        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <Link to="#" aria-label="Facebook" className="hover:text-blue-500">
               <FaFacebookSquare /> {/* Replace with appropriate icon */}
            </Link>
            <Link to="#" aria-label="Twitter" className="hover:text-blue-400">
              <FaSquareXTwitter />{/* Replace with appropriate icon */}
            </Link>
            <Link to="#" aria-label="Instagram" className="hover:text-pink-400">
            <FaInstagramSquare/>{/* Replace with appropriate icon */}
            </Link>
            <Link to="#" aria-label="LinkedIn" className="hover:text-blue-700">
              <i className="fab fa-linkedin-in"></i> {/* Replace with appropriate icon */}
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-6">
        © 2024 Copyrights - All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
