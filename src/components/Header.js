import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_transparent.png';

const signOut = (saveUser) => {
  localStorage.removeItem('token');
  saveUser(null);
};

function Header() {
  return (
    <header className="border-2 w-full absolute z-40">
      <div className="flex justify-between px-12">
        <Link to="/">
          <img className="circle w-52 h-52" src={logo} alt="img" />
        </Link>
        <div className="items-center justify-end flex">
          {'username'}
          <button
            // onClick={() => signOut(saveUser)}
            className="ml-6 cursor-pointer rounded bg-gray-100 hover:bg-gray-200 px-3 py-1 border transform duration-500 hover:scale-125"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
