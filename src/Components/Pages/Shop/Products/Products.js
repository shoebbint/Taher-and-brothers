import React, { useEffect, useState } from 'react';
import Cart from '../../../Shared/Cart/Cart';
import { useDispatch } from 'react-redux';
import { setData } from '../../../DataSlice/DataSlice';
import useProducts from '../../../../Hooks/useProducts';

const Products = () => {

  const [products] = useProducts([]);
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product) => {
    console.log(product)
    const existingItem = cartItems.find((item) => item.id === product._id);
    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
  };
  const dispatch = useDispatch();
  dispatch(setData(cartItems));


  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">Products</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {
              products.map(product =>
                <div className="p-4 lg:w-1/4 md:w-1/2" key={product._id}>
                  <div className="h-full flex flex-col items-center text-center">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">{product.productname}</h2>
                      <h3 className="text-gray-500 mb-3">{product.brandname}</h3>
                      <h1>{product.price} <span>&#2547;</span></h1>
                      <p className="mb-4">{product.description}</p>

                  <label onClick={(e) => addToCart(product)} cartItems={cartItems} htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Add to cart</label>
                      {/* <button  onClick={() => addToCart(product)}  className="btn btn-primary">Add to cart</button> */}
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </section>



    </div>
  );
};

export default Products;