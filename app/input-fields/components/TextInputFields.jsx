'use client';

import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa6';

const TextInputFields = () => {
  const [viewPassword, setViewPassword] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emailFocused, setEmailFocused] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleTogglePassword = e => {
    e.preventDefault();
    setViewPassword(!viewPassword);
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Enter your credentials to continue
        </p>
      </div>

      {/* EMAIL INPUT */}
      <div className="relative mb-8">
        <input
          id="email"
          type="email"
          name="email"
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
          placeholder=" "
          required
          className="peer w-full rounded-lg border-2 border-gray-300 bg-transparent px-4 py-3.5 text-base text-gray-900 outline-none transition-all duration-300 focus:border-blue-500 dark:border-gray-700 dark:text-gray-100 dark:focus:border-blue-400"
        />
        <label
          htmlFor="email"
          className="pointer-events-none absolute left-3 top-3.5 bg-white px-1 text-base text-gray-500 transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:text-blue-500 dark:bg-gray-900 dark:text-gray-400 dark:peer-focus:text-blue-400 dark:peer-[:not(:placeholder-shown)]:text-blue-400"
        >
          Email
        </label>
      </div>

      {/* PASSWORD INPUT */}
      <div className="relative mb-2">
        <input
          id="password"
          type={viewPassword ? 'text' : 'password'}
          name="password"
          value={passwordValue}
          onChange={e => setPasswordValue(e.target.value)}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          placeholder=" "
          title="Minimum 6 characters at least 1 Alphabet and 1 Number"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          required
          className="peer w-full rounded-lg border-2 border-gray-300 bg-transparent px-4 py-3.5 pr-12 text-base text-gray-900 outline-none transition-all duration-300 focus:border-blue-500 dark:border-gray-700 dark:text-gray-100 dark:focus:border-blue-400"
        />
        <label
          htmlFor="password"
          className="pointer-events-none absolute left-3 top-3.5 bg-white px-1 text-base text-gray-500 transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:text-blue-500 dark:bg-gray-900 dark:text-gray-400 dark:peer-focus:text-blue-400 dark:peer-[:not(:placeholder-shown)]:text-blue-400"
        >
          Password
        </label>
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 transition-all duration-300 hover:scale-110 hover:text-blue-500 focus:outline-none dark:text-gray-400 dark:hover:text-blue-400"
          aria-label="Toggle password visibility"
        >
          {viewPassword ? (
            <FiEyeOff className="h-5 w-5" />
          ) : (
            <FiEye className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* LOGIN BUTTON */}
      <button
        type="submit"
        className="flex gap-4 items-center justify-center mt-6 w-full rounded-lg bg-linear-to-r from-blue-500 to-indigo-600 px-6 py-3 text-base font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg active:scale-[0.98]"
      >
        Sign In <FaArrowRight />
      </button>
    </div>
  );
};

export default TextInputFields;
