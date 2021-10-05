import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../images/logo_transparent.png';
import { openModal } from '../store/actions';

import Login from '../modals/Login';
import Register from '../modals/Register';

// const signOut = (saveUser) => {
//   localStorage.removeItem('token');
//   saveUser(null);
// };

function Header() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);
  console.log('user', user);

  const loginIsOpen = useSelector((state) => state.modalReducer.loginIsOpen);
  const registerIsOpen = useSelector(
    (state) => state.modalReducer.registerIsOpen
  );

  return (
    <>
      {loginIsOpen && <Login />}
      {registerIsOpen && <Register />}
      <header className="w-full absolute z-40">
        <div className="flex justify-between px-12">
          <Link to="/">
            <img className="circle w-52 h-52" src={logo} alt="img" />
          </Link>
          <div className="items-center justify-end flex">
            {user ? (
              // logout component
              <div className="flex-auto items-center justify-end flex">
                {user.name}
                <button
                  // onClick={() => signOut(saveUser)}
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
