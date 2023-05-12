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
                <div class="flex items-start justify-between">
                    <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                    <div class="ml-3 flex h-7 items-center">
                        <button type="button" onClick={() => { document.getElementById('my-drawer-4').click() }} className="-m-2 p-2 text-gray-400 hover:text-gray-500 ">
                            <span class="sr-only">Close panel</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="mt-8">

                    <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                            {cartItems?.map((item) => (
                    // <li key={item.id}>
                    //     {item.name} - ${item.price} - Quantity: {item.quantity}
                    // </li>
            
                            <li class="flex py-6">
                                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img src={item.img} alt="Product" class="h-full w-full object-cover object-center" />
                                </div>

                                <div class="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                            <h3 className=''>
                                                {item.productname}
                                            </h3>
                                            <p class="ml-4">$ {item.price}</p>
                                        </div>
                                        <p class="mt-1 text-sm text-gray-500">{item.brandname}</p>
                                    </div>
                                    <div class="flex flex-1 items-end justify-between text-sm">
                                        <p class="text-gray-500 ">Quantity: {item.quantity}   </p>

                                        <div class="flex mx-2">
                                            <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div class="mt-6">
                        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                    </div>
                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            or
                            <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
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