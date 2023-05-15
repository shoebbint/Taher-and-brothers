import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state) => state.data);
    const a = localStorage.getItem("cart")
    return (

        <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">


                <h1>{a}</h1>
                <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                    <div className="ml-3 flex h-7 items-center">
                        <button type="button" onClick={() => { document.getElementById('my-drawer-4').click() }} className="-m-2 p-2 text-gray-400 hover:text-gray-500 ">
                            <span className="sr-only">Close panel</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mt-8">

                    <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartItems?.map((item) => (
                    // <li key={item.id}>
                    //     {item.name} - ${item.price} - Quantity: {item.quantity}
                    // </li>
            
                            <li className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img src={item.img} alt="Product" className="h-full w-full object-cover object-center" />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3 className=''>
                                                {item.productname}
                                            </h3>
                                            <p className="ml-4">$ {item.price}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{item.brandname}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500 ">Quantity: {item.quantity}   </p>

                                        <div className="flex mx-2">
                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                        <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            or
                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                            </button>
                        </p>
                    </div>
                </div>
            </ul>
        </div>

    );
};

export default Cart;