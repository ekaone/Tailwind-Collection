import React from "react";
import BeautyStars from "beauty-stars";

import Photo from "../../assets/food-nasi-goreng.jpeg";
import IconHeart from "../../assets/icon-heart.png";
import PhotoUser from "../../assets/erin-lindford.jpg";

export default function Card3() {
  return (
    <>
      <div className="p-10">
        <div className="max-w-sm rounded rounded-lg overflow-hidden shadow-lg">
          <img className="w-full" src={Photo} alt="Food" />
          <div className="px-6 py-2">
            <div class="flex items-center justify-between">
              <div className="font-bold text-xl mb-2 text-red-600">
                Nasi Campur
              </div>
              <div className="flex content-end">
                <div className="mr-2">Like</div>
                <img src={IconHeart} alt="icon-heart" />
              </div>
            </div>
          </div>
          <div className="px-6">
            <div className="flex items-center">
              <div className="mr-4">
                <BeautyStars
                  size="17px"
                  activeColor="#EF4C00"
                  inactiveColor="#ede5e4"
                  value="4"
                  gap="5px"
                />
              </div>
              <div className="text-gray-700 text-base">35 Reviews</div>
            </div>
          </div>
          <div className="px-6 py-4">
            <div class="flex items-center justify-between">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #makanan
              </span>
              <div>
                <img
                  class="w-10 h-10 rounded-full"
                  src={PhotoUser}
                  alt="Avatar user"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
