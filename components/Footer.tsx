import { socialMedia } from "@/data";
import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full pt-4 pb-3 sm:pt-6 sm:pb-5 relative">
      {/* Connect Section */}
      <div className="flex flex-col items-center gap-2 mb-3 p-2.5 sm:p-3 bg-white/10 rounded-lg max-w-2xl mx-2 sm:mx-auto shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
        <div className="flex items-center gap-1">
          <img 
            src="/as.png" 
            alt="AnyScreen" 
            className="h-10 w-auto" // Smaller logo for mobile
          />
          <span className="text-lg font-semibold text-white"></span>
        </div>
        <div className="flex flex-row gap-2 w-full mt-0.5">
          <a 
            href="mailto:sales@anyscreen.in" 
            className="flex-1 flex items-center justify-center gap-1 px-3 sm:px-4 py-2 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition border border-white/20 text-sm"
          >
            <FiMail className="text-base" />
            <span className="hidden sm:inline">Email Us</span>
            <span className="sm:hidden">Email</span>
          </a>
          <a 
            href="tel:+917559236621" 
            className="flex-1 flex items-center justify-center gap-1 px-3 sm:px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition text-sm"
          >
            <FiPhone className="text-base" />
            <span className="hidden sm:inline">Call Us</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="flex flex-wrap justify-center gap-4 text-xs text-white">
          
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/refund-return-policy">Refund and Return Policy</Link>
        </div>   
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/20 mb-2" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 px-2 sm:px-4 text-white">
        <p className="text-xs">
          Copyright © 2025 AnyScreen
        </p>
        <div className="flex items-center gap-2">
          {socialMedia.map((info) => (
            <a
              key={info.id + "-bottom"}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex justify-center items-center rounded-md border border-white/20 hover:bg-white/10 transition"
            >
              <img 
                src={info.img} 
                alt="social" 
                className="w-[16px] h-[16px]"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
