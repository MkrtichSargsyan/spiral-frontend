import React from 'react';
import MyInput from '../../ui_kits/MyInput';

function SearchBar() {
  return (
    <section className="px-10 md:px-20 py-12 md:py-20 bg-gray-300 flex flex-col md:flex-row items-center justify-between">
      <p className="w-full md:w-2/5 text-2xl md:text-3xl font-bold text-center md:text-left mb-4 md:mb-0 md:mr-8 font-mulish italic">
        Find your dream home
      </p>
      <div className="w-full h-16">
        <MyInput />
      </div>
    </section>
  );
}

export default SearchBar;
