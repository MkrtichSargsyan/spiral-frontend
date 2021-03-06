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
    <footer className="relative md:h-96">
      <div className="w-full bottom-0 h-full bg-black absolute z-10 opacity-95" />
      <div className="absolute bottom-0 w-full h-full">
        <img className="w-full h-full logo" src={footerbg} alt="footerbg" />
      </div>
      <div className="z-30 bottom-0 absolute w-full flex flex-col px-4 py-6">
        <div className="flex items-center md:my-12 flex-col md:flex-row">
          <div className="flex-1 text-white text-center text-2xl">
            (919) 382-2001
          </div>
          <div className="flex-1 flex justify-center">
            <Link to="/">
              <img className="circle w-52 h-52 md:w-40 md:h-40" src={logo} alt="img" />
            </Link>
          </div>
          <div className="w-full md:w-min flex-1">
            <ul className="flex justify-around w-3/4 m-auto">
              <li>
                <img className="w-8 h-8" src={f} alt="facebook" />
              </li>
              <li>
                <img className="w-8 h-8" src={t} alt="twitter" />
              </li>
              <li>
                <img className="w-8 h-8" src={i} alt="instagram" />
              </li>
              <li>
                <img className="w-8 h-8" src={l} alt="linkedin" />
              </li>
              <li>
                <img className="w-8 h-8" src={p} alt="pinterest" />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-around items-center flex-col md:flex-row mt-6 md:mt-0">
          <div className="flex-1 w-1/3 order-1 md:order-none">
            <div className="w-full md:w-1/3 flex justify-between m-auto">
              <span>
                <img className="w-10 h-10" src={h} alt="house" />
              </span>
              <span>
                <img className="w-10 h-10" src={r} alt="house" />
              </span>
            </div>
          </div>
          <div className="flex-1 mb-8 md:mb-0">
            <p className="text-white md:w-1/2 m-auto text-center">
              1901 Hillandale Rd, Suite 100 Durham, NC 27705
            </p>
          </div>
          <div className="flex-1 mb-4 md:mb-0">
            <p className="text-white md:w-1/2 m-auto text-center">
              ?? 2021 West & Woodall Real Estate
              {' '}
              <br />
              {' '}
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
