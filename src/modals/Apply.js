import React, { useState } from 'react';
import axios from 'axios';
import baseUrl from '../endpoints';

import { Backdrop } from './Backdrop';
import { chooseAgent, closeModal } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

function Apply() {
  const dispatch = useDispatch();

  const choosedHouse = useSelector((state) => state.housesReducer.choosedHouse);
  const choosedAgent = useSelector((state) => state.agentsReducer.choosedAgent);

  console.log('choosed', choosedHouse);
  console.log('chooseda', choosedAgent);

  console.log(choosedAgent.name);

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
      <div className={'modal shadow-md'}>
        <p className='text-center text-white text-2xl font-bold my-2'>Go Tour This Home</p>

        <div className="flex flex-col mb-6 w-full">
          <img
            src={choosedHouse.pictures[0]}
            alt="home_pic"
            className="px-6 mb-2"
          />
          <p className="font-bold px-6 text-xl">$ {choosedHouse.price}</p>
          <p className="font-bold px-6 text-gray-200">Seller {choosedAgent.name}</p>
        </div>

        <div className="flex items-center justify-start flex-wrap px-6">
          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 mr-2 rounded w-max"
          >
            Send
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
    </>
  );
}

export default Apply;
