import React from "react";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100 text-sm">
      <div className="bg-white p-8 w-full max-w-sm">
        {/* Sign In Heading */}
        <h2 className="text-lg font-bold text-black mb-6 text-center">Sign In</h2>

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter email or username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="absolute right-3 top-2.5 cursor-pointer text-gray-400">
            <i className="fas fa-eye"></i>
          </span>
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center mb-6">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-sm text-gray-700">
            Remember me
          </label>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Sign In
        </button>

        {/* Links Section */}
        <div className="flex justify-between mt-6 text-sm text-gray-600">
          <a href="#signup" className="hover:underline text-blue-600">
            Sign Up
          </a>
          <a href="#forgotpassword" className="hover:underline">
            Lost Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
