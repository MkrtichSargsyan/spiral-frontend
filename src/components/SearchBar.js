import React from 'react';
import MyInput from '../ui_kits/MyInput';

function SearchBar() {
  return (
    <section className="px-20 py-20 bg-gray-300 flex items-center justify-between">
      <p className='w-2/5 text-3xl font-bold mr-8 font-mulish italic'>Find your dream home</p>
      <div className="w-full h-16">
        <MyInput />
      </div>
    </section>
  );
}

export default SearchBar;
