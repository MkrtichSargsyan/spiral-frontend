import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../images/logo_transparent.png';
import { openModal, saveToken, saveUser } from '../store/actions';

import Login from '../modals/Login';
import Register from '../modals/Register';

function Header() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);

  const loginIsOpen = useSelector((state) => state.modalReducer.loginIsOpen);
  const registerIsOpen = useSelector(
    (state) => state.modalReducer.registerIsOpen,
  );

  const signOut = () => {
    localStorage.removeItem('token');
    dispatch(saveUser(null));
    dispatch(saveToken(null));
  };

  console.log(user);

  return (
    <>
      {loginIsOpen && <Login />}
      {registerIsOpen && <Register />}
      <header className="w-full absolute z-40 md:px-12">
        <div className="flex justify-around md:justify-between">
          <Link to="/">
            <img className="circle w-28 h-28 md:w-52 md:h-52" src={logo} alt="img" />
          </Link>
          <div className="items-center justify-end flex md:pr-4">
            {user ? (
              // logout component
              <div className="flex-auto items-center justify-end flex">
                <p className="font-bold text-3xl relative w-max one">
                  <Link
                    className="text-lg md:text-3xl text-white italic font-bold cursor-pointer"
                    to={`/users/${user.name}`}
                  >
                    {user.name}
                  </Link>
                  <span className="absolute -bottom-1 left-0 w-0 duration-1000 transition-all h-1 bg-blue-400" />
                </p>

                <Link
                  to="/"
                  onClick={signOut}
                  type="button"
                  className="ml-2 md:ml-6 cursor-pointer rounded bg-gray-100 hover:bg-gray-200 px-3 py-1 border transform duration-500 hover:scale-125"
                >
                  Sign Out
                </Link>
              </div>
            ) : (
              // log in component
              <div className="flex-auto items-center justify-end flex">
                <button
                  onClick={() => dispatch(openModal('registerIsOpen'))}
                  type="button"
                  className="mr-3 rounded bg-gray-100 hover:bg-gray-200 px-3 py-1 border transform duration-500 hover:scale-125"
                >
                  Signup
                </button>
                <button
                  onClick={() => dispatch(openModal('loginIsOpen'))}
                  type="button"
                  className="px-3 rounded bg-gray-100 hover:bg-gray-200 py-1 border transform duration-500 hover:scale-125"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
