
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-xl font-bold bg-gradient-to-r from-scoop-600 to-scoop-500 bg-clip-text text-transparent">
                ScoopLearn
              </h3>
            </Link>
            <p className="text-gray-600 text-sm">
              A learning platform that develops skills through community
              interaction and structured learning paths.
            </p>
            <p className="text-sm text-gray-500 font-medium">
              by LearnZie Inc.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-scoop-600 text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-scoop-600 text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-600 hover:text-scoop-600 text-sm transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-600 hover:text-scoop-600 text-sm transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-scoop-600 text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-scoop-600 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-scoop-600 text-sm transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-gray-600 text-sm">Email:</span>
                <a
                  href="mailto:Learnzie@contact.com"
                  className="text-gray-600 hover:text-scoop-600 text-sm transition-colors"
                >
                  Learnzie@contact.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-gray-600 text-sm">Phone:</span>
                <a
                  href="tel:01-234-5678"
                  className="text-gray-600 hover:text-scoop-600 text-sm transition-colors"
                >
                  01-234-5678
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-gray-600 text-sm">Web:</span>
                <a
                  href="https://www.learnzie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-scoop-600 text-sm transition-colors"
                >
                  www.learnzie.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-scoop-500 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-scoop-500 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-scoop-500 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-400 hover:text-scoop-500 transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} LearnZie Inc. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              <span className="font-medium">ScoopLearn</span> - Everyone Can Learn Everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
