import React from "react";
import Photo from "../../assets/erin-lindford.jpg";

export default function Card2() {
  return (
    <>
      <div className="p-20">
        <div className="md:flex border border-purple-500 shadow bg-gray-400 rounded-lg p-6">
          <img
            className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
            src={Photo}
          />
          <div className="text-center md:text-left">
            <h2 className="text-lg">Erin Lindford</h2>
            <div className="text-purple-500">Product Engineer</div>
            <div className="text-gray-600">erinlindford@example.com</div>
            <div className="text-gray-600">(555) 765-4321</div>
          </div>
        </div>
      </div>
    </>
  );
}
