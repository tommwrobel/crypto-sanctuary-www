import React from 'react';

const AppBar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4">
      <div className="text-white text-lg font-bold">Logo</div>
      <div className="flex space-x-4">
        <a href="#" className="text-white">Link 1</a>
        <a href="#" className="text-white">Link 2</a>
        <a href="#" className="text-white">Link 3</a>
      </div>
    </div>
  );
};

export default AppBar;
