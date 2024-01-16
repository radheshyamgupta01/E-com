import React from "react";
import "./Home.css";
import Header from "../Header/Header";

export default function Home() {
  return (
    <>
    <Header></Header>
    <div className="w-full  bg-green-400 ">
     
      <div className="w-full bg-green-400 ">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between  p-8">
          <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
            <h2 class="text-3xl text-white font-bold mb-2 font-serif">JUL16</h2>
            <h2 class="text-xl text-white font-serif">ANDHERI, MI</h2>
          </div>

          <div class="w-full lg:w-1/2">
            <h2 class="text-3xl text-white font-bold mb-2 font-serif">
            SYDNEY DART MUSIC THEATRE
            </h2>
            <button class="bg-blue-500 text-white px-4 py-2 rounded font-serif">
              Buy Tickets
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-green-400 ">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between  p-8">
          <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
            <h2 class="text-3xl text-white font-bold mb-2 font-serif">JUL16</h2>
            <h2 class="text-xl text-white font-serif">ANDHERI, MI</h2>
          </div>

          <div class="w-full lg:w-1/2">
            <h2 class="text-3xl text-white font-bold mb-2 font-serif">
              SAI NAGAR MUSIC THEATRE
            </h2>
            <button class="bg-blue-500 text-white px-4 py-2 rounded font-serif">
              Buy Tickets
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-green-400 ">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between p-8">
          <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
            <h2 class="text-3xl text-white font-bold mb-2 font-serif">JUL16</h2>
            <h2 class="text-xl text-white font-serif">DETROIT, MI</h2>
          </div>

          <div class="w-full lg:w-1/2">
            <h2 class="text-3xl text-white font-bold mb-2 font-serif">
              DTE ENERGY MUSIC THEATRE
            </h2>
            <button class="bg-blue-500 text-white px-4 py-2 rounded font-serif">
              Buy Tickets
            </button>
          </div>
        </div>

        <div className="w-full bg-green-400  ">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between  p-8">
            <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h2 class="text-3xl text-white font-bold mb-2 font-serif" >JUL16</h2>
              <h2 class="text-xl text-white font-serif">DETROIT, MI</h2>
            </div>

            <div class="w-full lg:w-1/2">
              <h2 class="text-3xl text-white font-bold mb-2 font-serif">
                DTE ENERGY MUSIC THEATRE
              </h2>
              <button class="bg-blue-500 text-white px-4 py-2 rounded font-serif">
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
