import React from 'react';

function Framework_Names() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center max-w-[1200px]">
        <div className="flex flex-wrap justify-center gap-2 p-2">
          <button className="flex items-center gap-2 px-4 py-2  border border-gray-300 rounded-full">
            <i className="fas fa-calendar-alt"></i>
            <span className="hidden sm:inline">React</span>
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2  border border-gray-300 rounded-full">
          <i className="fab fa-twitter"></i>
          <span className="hidden sm:inline">@toolify</span>
        </button>
      </div>
    </div>
  );
}

export default Framework_Names;
