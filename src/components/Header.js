import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../images/logo_transparent.png';
import { openModal, saveUser } from '../store/actions';

import Login from '../modals/Login';
import Register from '../modals/Register';

function Header() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);

  const loginIsOpen = useSelector((state) => state.modalReducer.loginIsOpen);
  const registerIsOpen = useSelector(
    (state) => state.modalReducer.registerIsOpen
  );

  const signOut = () => {
    localStorage.removeItem('token');
    dispatch(saveUser(null));
  };

  return (
    <>
      {loginIsOpen && <Login />}
      {registerIsOpen && <Register />}
      <header className="w-full absolute z-40">
        <div className="flex justify-between">
          <Link to="/">
            <img className="circle w-49 h-40 md:w-52 md:h-52" src={logo} alt="img" />
          </Link>
          <div className="items-center justify-end flex pr-4">
            {user ? (
              // logout component
              <div className="flex-auto items-center justify-end flex">
                <p className="font-bold text-3xl relative w-max one">
                  <Link
                    className="text-2xl text-white italic font-bold cursor-pointer"
                    to={`/users/${user.name}`}
                  >
                    {user.name}
                  </Link>
                  <span className="absolute -bottom-1 left-0 w-0 duration-1000 transition-all h-1 bg-blue-400"></span>
                </p>

                <button
                  onClick={signOut}
                  className="ml-6 cursor-pointer rounded bg-gray-100 hover:bg-gray-200 px-3 py-1 border transform duration-500 hover:scale-125"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              // log in component
              <div className="flex-auto items-center justify-end flex">
                <button
                  onClick={() => dispatch(openModal('registerIsOpen'))}
                  className="mr-3 rounded bg-gray-100 hover:bg-gray-200 px-3 py-1 border transform duration-500 hover:scale-125"
                >
                  Signup
                </button>
                <button
                  onClick={() => dispatch(openModal('loginIsOpen'))}
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
