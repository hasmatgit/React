import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          
          {/* Image Section */}
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/25/00/17/on-red-2096674_640.png"
              alt="About us"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis voluptatem
              accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
              aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
              Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>

            <Link
              to="hasmat"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
