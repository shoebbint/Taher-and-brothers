import React, { useEffect, useRef, useState } from 'react';

const AddProduct = () => {
    const [categories, setCategories] = useState([]);
useEffect(() => {
    fetch('https://taher-brothers-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
}, [])
    const [subCategories, setSubCategories] = useState([]);
useEffect(() => {
    fetch('https://taher-brothers-server.vercel.app/subcategories')
        .then(res => res.json())
        .then(data => setSubCategories(data));
}, [])
    const categoryIdRef = useRef('');
    const subCategoryIdRef = useRef('');
    const productRef = useRef('');
    const priceRef = useRef('');
    const brandRef = useRef('');
    const imgRef = useRef('');
    const descriptionRef = useRef('');
    const handleAddProduct = (event) => {
        event.preventDefault();
        const categoryId = categoryIdRef.current.value;
        const subCategoryId = subCategoryIdRef.current.value;
        const name = productRef.current.value;
        const price = priceRef.current.value;
        const brandname = brandRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const product = { name,price,brandname,categoryId,subCategoryId, img, description };
        console.log(product);
        //send data to server
        const response = fetch("https://taher-brothers-server.vercel.app/addproduct", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                console.log("Success:", data)

            })
event.target.reset();
    }
    return (
        <div>
        <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add a Product</h1>
                </div>
                <form onSubmit={handleAddProduct} >
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="productname" class="leading-7 text-sm text-gray-600">Product Name</label>
                                    <input ref={productRef} type="text" id="productname" name="productname" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="productprice" class="leading-7 text-sm text-gray-600">Product Price</label>
                                    <input ref={priceRef} type="number" id="productprice" name="productprice" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="brandname" class="leading-7 text-sm text-gray-600">Brand Name</label>
                                    <input ref={brandRef} type="text" id="brandname" name="brandname" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="subcategoryid" class="leading-7 text-sm text-gray-600">Select Sub Category</label>
                                    <select ref={subCategoryIdRef}  id="subcategoryid" name="subcategoryid" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                        {
                                            subCategories.map(subCategory=>
                                                <option value={subCategory._id}>Engine items</option>
                                            )
                                        }
                               
              
                                        </select>
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="categoryid" class="leading-7 text-sm text-gray-600">Select Category</label>
                                    <select ref={categoryIdRef}  id="categoryid" name="categoryid" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                        {
                                            categories.map(category=>
                                                <option value={category._id}>Engine items</option>
                                            )
                                        }
                               
              
                                        </select>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="productimg" class="leading-7 text-sm text-gray-600">Product Image</label>
                                    <input ref={imgRef} type="file" id="productimg" name="productimg" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="productdescription" class="leading-7 text-sm text-gray-600">Product Description</label>
                                    <textarea ref={descriptionRef} id="productdescription" name="productdescription" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <button type='submit' class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </section>
    </div>
    );
};

export default AddProduct;