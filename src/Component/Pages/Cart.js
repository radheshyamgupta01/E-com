import React from 'react';
import Mdal from './Mdal';
import { useContext } from 'react';
import ctx from '../Contex/Ctx';

function Cart() {
  let { arr } = useContext(ctx);

  return (
    <div className='bg-slate-600 flex items-center justify-center h-screen'>
      {arr.length > 0 ? (
        <Mdal />
      ) : (
        <div className='container text-center text-3xl '>
        <i class="ri-shopping-cart-2-line size='3x' className='text-gray-500 mr-2 font-serif  "></i>  
          YOUR CART IS EMPTY
        </div>
      )}
    </div>
  );
}

export default Cart;
