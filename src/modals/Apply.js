import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import baseUrl from '../endpoints';

import Backdrop from './Backdrop';
import { closeModal } from '../store/actions';

function Apply() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.authReducer.user);
  const choosedHouse = useSelector((state) => state.housesReducer.choosedHouse);
  const choosedAgent = useSelector((state) => state.agentsReducer.choosedAgent);

  const notify = () => toast.success('Our agent will contact you soon', {
    autoClose: 3000,
  });

  const send = async () => {
    const token = localStorage.getItem('token');

    if (token && token !== 'undefined') {
      const config = {
        method: 'post',
        url: `${baseUrl}/apply`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: {
          house_id: choosedHouse.id,
        },
      };
      try {
        await axios(config);
      } catch (error) {
        alert(error);
      }
      history.push(`/users/${user.name}`);
      dispatch(closeModal());
      notify();
    }
  };

  return (
    <>
      <Backdrop />
      <div className="modal shadow-md">
        <p className="text-center text-white text-2xl font-bold my-2">
          Go Tour This Home
        </p>

        <div className="flex flex-col mb-6 w-full">
          <img
            src={
              choosedHouse.pictures[
                Math.floor(Math.random() * choosedHouse.pictures.length)
              ]
            }
            alt="home_pic"
            className="px-6 mb-2"
          />
          <p className="font-bold px-6 text-xl">
            $
            {choosedHouse.price}
          </p>
          <p className="font-bold px-6 text-gray-200 italic">
            Seller
            {' '}
            {choosedAgent.name}
          </p>
        </div>

        <div className="flex items-center justify-start flex-wrap px-6">
          <button
            onClick={() => send(choosedHouse)}
            type="button"
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
