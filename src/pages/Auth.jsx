import React from 'react';

function Auth({ setIsLoggedIn }) {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <button
        className="px-2 py-6 rounded-xl bg-red-500 hover:bg-red-600 text-white"
        onClick={() => setIsLoggedIn((prev) => !prev)}
      >
        Login
      </button>
    </div>
  );
}

export default Auth;
