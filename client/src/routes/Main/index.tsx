import React from 'react';
import Icon from '@assets/images/icon.png';

const Main = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto h-screen flex flex-col items-center">
        <img src={Icon} alt="connect" className="justify-items-start my-10" />
        <div className="flex flex-col h-full justify-end items-center pb-20">
          <div className="mb-10">
            <button className="font-bold text-lg rounded-full bg-gradient-to-r from-purple-700 to-pink-600 py-16 px-10 outline-none focus:outline-none">
              SIGN UP
            </button>
          </div>
          <div>
            <span className="opacity-75">ALREADY HAVE ACCOUNT?</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
