import React, { useCallback, useContext, useEffect, useState } from "react";
import ctx from "../Contex/Ctx";

const CartModal = ({ total }) => {
  let { arr, displayModal, setArr, isModal } = useContext(ctx);
  let totalPrice = 0;
  for (var i = 0; i < arr.length; i++) {
    totalPrice += Number(arr[i].price);
  }
  useEffect(() => {}, [arr]);
  let deleteItem = (index) => {
    let newArr = [...arr];
    newArr.splice(index, 1);
    setArr(newArr);
  };
  let displayModalHandler = useCallback(() => {
    displayModal();
  }, [isModal]);
  return (
    <>
     {arr.length === 0 ? (
  <div className="alert alert-primary" role="alert">
    A simple primary alert—check it out!
  </div>
) 
: (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black opacity-90"></div>

          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <div className="mb-4 text-center">
                <h2 className="text-2xl font-semibold font-serif">Cart</h2>
                <button
                  className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-800"
                  onClick={displayModal}
                >
                  <i class="ri-close-line"></i>
                </button>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 font-serif">Items</h3>

                {arr.map((item, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 object-cover rounded mr-2"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-500 font-serif">
                        Price: ${item.price} | Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="mx-5">
                      <button
                        className="  w-20 bg-red-700 rounded text-white font-serif"
                        onClick={() => deleteItem(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 font-serif">
                  Total Price
                </h3>
                <p className="text-gray-500">Total: ${totalPrice}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                  Purchase
                </button>
                <button
                  className="bg-blue-500 text-white mx-10 px-8 py-2 rounded-md mt-4"
                  onClick={displayModalHandler}
                >
                  <i class="ri-close-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;
