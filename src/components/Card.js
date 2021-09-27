/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Link } from 'react-router-dom';

function Card({
  icon,
  iconName,
  title,
  description,
  buttonText,
  link,
  color,
  colorHover,
}) {
  return (
    <article className="showcaseCard flex flex-col flex-1 bg-gray-100 items-center text-center transform duration-1000 hover:scale-110 shadow-xl z-50 rounded-sm">
      <div className="w-20 h-20 my-10">
        <img
          src={icon}
          alt={iconName}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h2 className="font-bold text-2xl mb-6 font-serif">{title}</h2>
      <p className="px-12 text-lg text-gray-500 mb-8">{description}</p>

      <Link
        to={link}
        className="text-white"
        className={`${color} hover:${colorHover} transition duration-500 ease-in-out cursor-pointer w-full p-5`}
      >
        {buttonText}
      </Link>
    </article>
  );
}

export default Card;
