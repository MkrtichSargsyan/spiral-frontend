import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_transparent.png';
import f from '../images/socialImages/facebook.png';
import t from '../images/socialImages/twitter.png';
import l from '../images/socialImages/linkedin.png';
import i from '../images/socialImages/instagram.png';
import p from '../images/socialImages/pinterest.png';
import h from '../images/socialImages/h.png';
import r from '../images/socialImages/r.png';
import footerbg from '../images/footerbg.png';

function Footer() {
  return (
    <footer className="relative">
      <div className="w-full h-80 bg-black absolute z-10 opacity-95"></div>
      <div className="footerbg absolute w-full h-80">
        <img className="w-full h-full logo" src={footerbg} alt="footerbg" />
      </div>
      <div className="z-30 absolute w-full h-80 flex flex-col px-4 py-6">
        <div className="flex justify-around border-2 flex items-center my-12">
          <div>(919) 382-2001</div>
          <div>
            <Link to="/">
              <img className="circle w-20 h-20 logo" src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="flex">
            <li>
              <img src={f} alt="facebook" />
            </li>
            <li>
              <img src={t} alt="twitter" />
            </li>
            <li>
              <img src={i} alt="instagram" />
            </li>
            <li>
              <img src={l} alt="linkedin" />
            </li>
            <li>
              <img src={p} alt="pinterest" />
            </li>
          </ul>
        </div>

        {/* second */}
        <div className="flex justify-around">
          <div className="flex-1">
            <div className="w-1/3 flex justify-between m-auto">
              <span>
                <img className="w-10 h-10" src={h} alt="house" />
              </span>
              <span>
                <img className="w-10 h-10" src={r} alt="house" />
              </span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-white w-1/2 m-auto text-center">
              1901 Hillandale Rd, Suite 100 Durham, NC 27705
            </p>
          </div>
          <div className="flex-1">
            <p className="text-white w-1/2 m-auto text-center">
              © 2021 West & Woodall Real Estate <br /> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
