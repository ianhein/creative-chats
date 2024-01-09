"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_logo">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="footer_logo_text">CreativeChats</p>
        </div>
        <nav className="footer_nav">
          <Link href="/" className="footer_nav_item">
            Home
          </Link>
          <Link href="/about" className="footer_nav_item">
            About
          </Link>
          <Link href="/contact" className="footer_nav_item">
            Contact
          </Link>
        </nav>
        <div className="footer_socials">
          {/* Iconos de redes sociales (reemplaza con tus enlaces y iconos) */}
          <a href="https://twitter.com" className="footer_social_icon">
            Twitter
          </a>
          <a href="https://facebook.com" className="footer_social_icon">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
