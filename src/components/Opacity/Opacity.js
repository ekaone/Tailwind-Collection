import React from "react";

export default function Opacity() {
  return (
    <div>
      <div className="z-40 ml-4 mt-2 bg-yellow-400 w-24 h-24 absolute opacity-75 rounded-lg">
        Paling atas
      </div>
      <div className="z-30 ml-6 mt-4 bg-gray-500 w-24 h-24 absolute">kedua</div>
      <div className="z-20 ml-8 mt-6 bg-gray-600 w-24 h-24 absolute">z-20</div>
      <div className="z-10 ml-10 mt-8 bg-gray-700 w-24 h-24 absolute">z-10</div>
      <div className="z-0 ml-12 mt-10 bg-gray-800 w-24 h-24 absolute">z-0</div>
    </div>
  );
}
