import React from 'react';
import Mdal from './Mdal';
import { useContext } from 'react';
import ctx from '../Contex/Ctx';
import Header from '../Header/Header';

function Cart() {
  let { arr } = useContext(ctx);

  return (
    <>
      <Header></Header>

      <div
        className='bg-gray-100 flex items-center justify-center h-screen'
       
      >
        {arr.length > 0 ? (
          <Mdal />
        ) : (
          
          <div class="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
              <div class="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
                  <p class="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">Opps</p>
                  <p class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">Cart is empty</p>
                  <p class="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">Sorry, the page you are looking for could not be found add some item in to the cart.</p>
                 
              </div>
             
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
