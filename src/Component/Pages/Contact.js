import React from 'react';
import Header from '../Header/Header';


const ContactUs = () => {
  return (
    <>
    <Header></Header>
    

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold font-serif mb-6">Contact Us</h2>

        <div className="mb-4 flex items-center">
          <label htmlFor="name" className="block text-gray-600">
          <i class="ri-user-3-line"></i>
            
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="name"
              className="form-input py-2  font-serif px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              placeholder="Your Name"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="email" className="block text-gray-600">
          <i class="ri-mail-unread-line"></i>
            
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="email"
              id="email"
              className="form-input py-2 px-4 block w-full font-serif leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              placeholder="Your Email"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="phone" className="block text-gray-600">
          <i class="ri-phone-line"></i>
            
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="tel"
              id="phone"
              className="form-input py-2 px-4 block w-full font-serif leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              placeholder="Your Phone"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="password" className="block text-gray-600">
          <i class="ri-lock-2-line"></i>
            
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="password"
              id="password"
              className="form-input py-2 px-4 block  font-serif w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              placeholder="Your Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            className="py-2 px-4 bg-blue-500 text-white font-serif rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
