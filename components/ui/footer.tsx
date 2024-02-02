import React from "react";
import Link from "next/link";
import makByteLogo from "../../public/images/logo/LogoFiles/Web/svg/Blacklogo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            

            {/* Copyrights note */}
            <div className="w-full text-gray-400 text-sm mr-4">
             
              <ul className="w-full flex items-center justify-between mb-4 md:order-1 md:mb-0">
             <li> &copy; Makbyte.io All rights reserved.</li>
              <li >
                <Link
                  href="https://www.linkedin.com/company/101366837/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Linkedin"
                  target="_blank"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
