import React from 'react';

function Testimonials() {
  return (
    <section className="px-10 lg:px-40 py-10 bg-black opacity-95">
      <h3 className="text-gray-400 mb-10">TESTIMONIALS</h3>
      <div className="flex justify-between flex-col md:flex-row">
        <article className="text-gray-100 font-caramel text-3xl flex-1 flex flex-col">
          <q className="mb-4  md:mb-10">
            The difference in finding a good realtor and a great realtor is in
            the details. Michael, Nancy, and their team focus on those details.
          </q>
          <cite className="font-serif mb-10 md:mb-0 text-right md:text-left">Andrew Firestone</cite>
        </article>
        <article className="text-gray-100 font-caramel text-3xl flex-1 md:mx-10 flex flex-col">
          <q className="mb-4  md:mb-10">
            Both of us were very comfortable with Michael and Nancy’s knowledge
            and professionalism. Not to mention that we think they are darn nice
            people too.
          </q>
          <cite className="font-serif mb-10 md:mb-0 text-right md:text-left">Tim & Sue Peoples</cite>
        </article>
        <article className="text-gray-100 font-caramel text-3xl flex-1 flex flex-col">
          <q className="mb-4  md:mb-10">
            They fulfilled all of our expectations. I would very highly
            recommend Calcagno & Hamilton as a real estate agent.
          </q>
          <cite className="font-serif md:mb-0 text-right md:text-left">John Clark</cite>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
