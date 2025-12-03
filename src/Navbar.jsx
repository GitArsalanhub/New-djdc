
import { useState } from "react";
import TtyIcon from '@mui/icons-material/Tty';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <>

      <header className="shadow-md">
        <nav className="container mx-auto px-2 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="w-[80px]  md:w-[110px] flex items-center">
            <img src="/src/assets/logo.png" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="flex justify-end relative top-5 gap-8 hidden md:flex">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our Products</a></li>
            <li><a href="#">Our Infrastructure</a></li>
            <li><a href="#">Catalogue</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden bg-blue-500 px-3 py-1 rounded" onClick={toggle}>
            <MenuIcon className="text-white" />
          </button>

          {/* Contact & Social Icons (Desktop only) */}
          <div className="container hidden md:flex mx-auto px-4 flex gap-5 absolute justify-end top-10">
            <a href="tel:01287587676">
              <TtyIcon className="text-red-500" />01287587676
            </a>
            <a href="mailto:info@.djdcbatry.in">
              <AttachEmailIcon className="text-red-500" />info@.djdcbatry.in
            </a>
            <div className="flex gap-2">
              <FacebookIcon className="text-red-500" />
              <InstagramIcon className="text-red-500" />
              <TwitterIcon className="text-red-500" />
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <ul className={`flex flex-col gap-2 z-10 bg-[rgba(255,255,255,0.8)] absolute w-full shadow-sm p-4 md:hidden transition-all duration-300
        ${open ? "block" : "hidden"}`}
        >
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Our Products</a></li>
          <li><a href="#">Our Infrastructure</a></li>
          <li><a href="#">Catalogue</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </header>

    </>
  );
}
