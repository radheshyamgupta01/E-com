
import React, { useContext } from "react";
import Header from "../Header/Header";
import CartModal from "../Header/CartModal";
import Mdal from "./Mdal";
import ctx from "../Contex/Ctx";
import TheGeneric from "./TheGeneric";
const Store = () => {
 const {displayModal,isModal}=useContext(ctx)

  const products = [
    {
      title: "Product 2",
      image: "data:image/jpeg;base64,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",
      price: "250"
    },
    {
      title: "Product 3",
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/lshruthi/Jupiter/CentralPage/P2/200/D96279181_INWLD_Jupiter_CentralPage-Inputs_DesktopShoveler_200x200._CB574628988_.jpg",
      price: "150"
    },
    {
      title: "Product 1",
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/lshruthi/Jupiter/CentralPage/P2/200/D96279181_INWLD_Jupiter_CentralPage-Inputs_DesktopShoveler_200x200._CB574628988_.jpg",
      price: "200"
    },
  
   
    {
      title: "Product 4",
      image: "https://m.media-amazon.com/images/I/51PlkfLpWWL._AC_SY200_.jpg",
      price: "150"
    },
    {
      title: "Product 5",
      image: "https://m.media-amazon.com/images/I/31N+3b97reL._AC_SY200_.jpg",
      price: "150"
    },
    {
      title: "Product 6",
      image: "https://m.media-amazon.com/images/I/31N+3b97reL._AC_SY200_.jpg",
      price: "150"
    },
    {
      title: "Product 7",
      image: "https://m.media-amazon.com/images/I/51PlkfLpWWL._AC_SY200_.jpg",
      price: "150"
    },{
      title:"product 7",
      image:"https://images-eu.ssl-images-amazon.com/images/G/31/kindle-content-smeghn/ART/Jan23/BAU/758x608_phase3_ke._SY304_CB575273971_.jpg"
      ,price:"350"
    },
    {
      title: "Product 1",
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/lshruthi/Jupiter/CentralPage/P2/200/D96279181_INWLD_Jupiter_CentralPage-Inputs_DesktopShoveler_200x200._CB574628988_.jpg",
      price: "200"
    },
    {
      title: "Product 2",
      image: "data:image/jpeg;base64,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",
      price: "250"
    },
    {
      title: "Product 3",
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/lshruthi/Jupiter/CentralPage/P2/200/D96279181_INWLD_Jupiter_CentralPage-Inputs_DesktopShoveler_200x200._CB574628988_.jpg",
      price: "150"
    },
    {
      title: "Product 4",
      image: "https://m.media-amazon.com/images/I/51PlkfLpWWL._AC_SY200_.jpg",
      price: "150"
    },
    {
      title: "Product 5",
      image: "https://m.media-amazon.com/images/I/31N+3b97reL._AC_SY200_.jpg",
      price: "150"
    },
    {
      title: "Product 6",
      image: "https://m.media-amazon.com/images/I/31N+3b97reL._AC_SY200_.jpg",
      price: "150"
    },
    {
      title: "Product 7",
      image: "https://m.media-amazon.com/images/I/51PlkfLpWWL._AC_SY200_.jpg",
      price: "150"
    },{
      title:"product 7",
      image:"https://images-eu.ssl-images-amazon.com/images/G/31/kindle-content-smeghn/ART/Jan23/BAU/758x608_phase3_ke._SY304_CB575273971_.jpg"
      ,price:"350"
    },
  ];

   let {  arr, arrData } = useContext(ctx);

  const addToClick = (item) => {

    arrData(item);
    
  };
  let total=0
  for(var i=0;i<arr.length;i++){
    console.log(arr.price)
total+=!isNaN(arr.price)
  }
  
  return (
    <>
       {isModal && <Mdal total={total}></Mdal>} 
       <TheGeneric></TheGeneric>
      <div className="container mx-auto">
    
        <div className="flex flex-wrap">
          {products.map((item, index) => (
            <div key={index} className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 m-4 border w-full overflow-hidden transition-transform transform duration-300 ease-in-out hover:scale-110">
              <div className="relative group">
                <h2 className="text-lg font-semibold cursor-pointer font-serif">
                  {item.title}
                </h2>
                <img
                  src={item.image}
                  alt="Product"
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-2">
                <p className="text-gray-600 font-serif">${item.price}</p>
                <button
                  onClick={() => addToClick(item)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded font-serif"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Store;
