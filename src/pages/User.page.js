import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import re4 from '../images/realEstate/re4.jpg';
import userImage from '../images/userImage.png';
import baseUrl from '../endpoints';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { chooseHouse } from '../store/actions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserPage() {
  const dispatch = useDispatch();

  const [appointments, setAppointments] = useState([]);
  const user = useSelector((state) => state.authReducer.user);

  const notify = () => toast.success('Appointment successfully removed!',{
    autoClose:3000
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token !== 'undefined') {
      let config = {
        method: 'get',
        url: `${baseUrl}show_appointments`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      axios(config).then((res) => setAppointments(res.data));
    }
  }, [appointments]);

  const chooseTheHouse = (id) => {
    dispatch(chooseHouse(id));
  };

  const cancelAppointment = async (e, id) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (token && token !== 'undefined') {
      let config = {
        method: 'delete',
        url: `${baseUrl}remove_appointment`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: {
          appointment_id: id,
        },
      };
      try {
        await axios(config).then(notify());
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <>
      <section
        className="relative bg-no-repeat bg-cover flex justify-center flex-col items-center"
        style={{
          height: '60vh',
          width: '100%',
          transition: 'all 2s ease-in-out',
          backgroundSize: 'cover',
          backgroundImage: `url(${re4})`,
        }}
      >
        <ToastContainer />

        <div>
          <div className="text-center z-40 mt-40 flex justify-center w-max">
            <div className="w-40 h-40 rounded-full">
              <img
                src={userImage}
                alt="agent_photo"
                className="w-40 h-40 rounded-full"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-5xl text-white capitalize mb-2 italic">
                {user.name}
              </h1>
              <h2 className="text-gray-500 text-3xl italic">{user.email}</h2>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-black absolute z-10 opacity-70"></div>
      </section>
      <section className="px-40 py-20 bg-gray-300">
        <h1 className="text-center text-5xl mb-10 font-mulish font-bold text-gray-700">
          APPOINTMENTS
        </h1>
        <div className="border-1 border-black flex w-full flex-col">
          {appointments ? (
            appointments.length > 0 ? (
              appointments.map((app, i) => (
                <Link
                  onClick={() => chooseTheHouse(app.user_house.id)}
                  to={`/houses/${app.user_house.id}`}
                  key={i}
                >
                  <article className="border flex justify-between px-10 py-2 m-2 bg-gray-200 shadow-lg transform duration-500 hover:scale-105">
                    <div className="flex flex-col justify-center items-center flex-1">
                      <img
                        src={app.agent_to_connect.photo}
                        alt="agentPhoto"
                        className="rounded-full w-20 mb-2"
                      />
                      <h2 className="w-max">{app.agent_to_connect.name}</h2>
                    </div>
                    <div className="flex flex-1 flex-col justify-around">
                      <p className="font-semibold">
                        House number {app.user_house.id}
                      </p>
                      <p>Address {app.user_house.address}</p>
                      <p>Prise ${app.user_house.price}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={(e) =>
                          cancelAppointment(e, app.appointment_id)
                        }
                        className="px-3 rounded bg-red-500 text-gray-200 hover:bg-red-700 py-2 transform duration-500 hover:scale-105"
                      >
                        Cancel
                      </button>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <p className="text-center text-2xl text-gray-500">
                No Records found
              </p>
            )
          ) : (
            <Loader />
          )}
        </div>
      </section>
    </>
  );
}

export default UserPage;
