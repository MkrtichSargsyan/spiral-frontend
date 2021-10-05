import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import baseUrl from '../endpoints';
import { Backdrop } from './Backdrop';
import { closeModal, saveToken, saveUser } from '../store/actions';

function Register() {
  const dispatch = useDispatch();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: name,
      email: email,
      password: password,
    };

    let config = {
      method: 'post',
      url: `${baseUrl}/users`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    if (password && password.length > 5 && name && email) {
      try {
        const authPromise = await axios(config);
        const authData = authPromise.data;
        console.log('token', authData.token);
        window.localStorage.setItem('token', authData.token);
        dispatch(saveToken(authData.token));

        let result = jwtDecode(authData.token);
        console.log('result', result);
        dispatch(saveUser(result));

        dispatch(closeModal());
      } catch (error) {
        setError(error);
      }
    } else {
      setError('Invalid data');
    }
  };

  return (
    <>
      <Backdrop />
      <form className={'modal shadow-md'} onSubmit={(e) => handleSubmit(e)}>
        {error && <div className="text-red-600">{error}</div>}
        <div className="pt-6 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-800 mb-3"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-800 mb-3"
              id="password"
              type="password"
              placeholder="********"
            />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-start flex-wrap">
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 mr-2 rounded w-max"
            >
              Create Account
            </button>
            <button
              onClick={() => dispatch(closeModal())}
              className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-max"
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
