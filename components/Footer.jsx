"use client";

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
        <div className="footer_container">
          <h1 className="font_satoshi">Ian Hein 2024</h1>
        </div>
        <div className="footer_socials">
          {/* Iconos de redes sociales (reemplaza con tus enlaces y iconos) */}
          <a
            href="https://www.instagram.com/ie.hein/"
            className="footer_social_icon"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
