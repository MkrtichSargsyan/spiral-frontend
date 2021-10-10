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
    <article className="showcaseCard mb-6 md:mb-0 flex flex-col flex-1 bg-gray-100 items-center text-center transform duration-1000 hover:scale-110 shadow-xl z-40 rounded-sm">
      <div className="w-40 h-40 md:w-20 md:h-20 my-10">
        <img
          src={icon}
          alt={iconName}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h2 className="font-bold text-2xl mb-6 font-serif">{title}</h2>
      <p className="flex-1 px-8 md:px-12 text-lg text-gray-500 mb-8">{description}</p>

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
