import React, { useState } from 'react';
import axios from 'axios';
import baseUrl from '../endpoints';

import { Backdrop } from './Backdrop';
import { closeModal, saveToken, saveUser } from '../store/actions';
import { useDispatch } from 'react-redux';

function Apply() {
  const dispatch = useDispatch();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   let data = {
  //     email: email,
  //     password: password,
  //   };

  //   let config = {
  //     method: 'post',
  //     url: `${baseUrl}/login`,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     data: data,
  //   };

  //   try {
  //     const authPromise = await axios(config);
  //     const authData = authPromise.data;
  //     window.localStorage.setItem('token', authData.token);
  //     dispatch(saveToken(authData.token));
  //     dispatch(saveUser(authData.user));
  //     dispatch(closeModal());
  //   } catch (error) {
  //     setError(error.response.data.message);
  //   }
  // };

  return (
    <>
      <Backdrop />
      {/* <form className={'modal shadow-md'} onSubmit={(e) => handleSubmit(e)}> */}
      <div className={'modal'}>
        {!localStorage.getItem('token') && (
          <div className="text-red-700">Please log in first</div>
        )}
        <div className="relative">
          {/* <p>Are you sure you want to apply for {company_name}</p> */}
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
      </div>
    </>
  );
}

export default Apply;
