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
    <article className="flex flex-col flex-1 border-2 items-center text-center">
      <div className="w-20 h-20 my-10">
        <img
          src={icon}
          alt={iconName}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h2 className="font-bold text-2xl mb-6 font-serif">{title}</h2>
      <p className="px-12 text-lg text-gray-500 mb-8">{description}</p>
      <div
        className={`${color} hover:${colorHover} transition duration-500 ease-in-out cursor-pointer w-full p-5`}
      >
        <Link to={link}>{buttonText}</Link>
      </div>
    </article>
  );
}

export default Card;
