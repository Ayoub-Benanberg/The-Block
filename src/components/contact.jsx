import React from 'react';

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-gray-100 grid place-items-center py-12">
      <div className="w-full max-w-3xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          What can we do for you?
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mx-20 lg:mx-28">
          We are ready to work on a project of any complexity, whether it’s commercial or residential.
        </p>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />

            <span className="absolute px-0.5 top-1/2 transform -translate-y-1/2 text-red-500">
              *
            </span>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />

            <span className="absolute px-0.5 top-1/2 transform -translate-y-1/2 text-red-500">
              *
            </span>
          </div>
          {/* Reason for Contacting */}
          <div className="relative text-gray-400">
            <select
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="default">Reason for Contacting</option>
              <option value="consultation">Consultation</option>
              <option value="quote">Request a Quote</option>
              <option value="general">General Inquiry</option>
            </select>
            {/* Red Asterisk */}
            <span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-red-500">
              *
            </span>
          </div>

          {/* Phone Field */}
          <div>
            <input
              type="text"
              placeholder="Phone"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Message Field */}
          <div className="sm:col-span-2">
            <textarea
              placeholder="Message"
              rows="4"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>
          {/* Required Fields Note */}
          <div className="sm:col-span-2 text-sm text-gray-500">
            <span className='text-red-500'>*</span> indicates a required field
          </div>
          {/* Submit Button */}
          <div className="sm:col-span-2 ">
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 px-4 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
