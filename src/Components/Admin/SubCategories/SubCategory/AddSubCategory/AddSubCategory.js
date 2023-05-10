import React, { useEffect, useRef, useState } from 'react';

const AddSubCategory = () => {
    const [categories, setCategories] = useState([]);
useEffect(() => {
    fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
}, [])
    const categoryIdRef = useRef('');
    const subCategoryRef = useRef('');
    const imgRef = useRef('');
    const descriptionRef = useRef('');
    const handleAddSubCategory = (event) => {
        event.preventDefault();
        const categoryId = categoryIdRef.current.value;
        const subcategoryname = subCategoryRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const category = { categoryId,subcategoryname, img, description };
        console.log(category);
        //send data to server
        const response = fetch("http://localhost:5000/addsubcategory", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
        })
            .then(res => res.json())
            .then(data => {
                console.log("Success:", data)

            })

    }

    return (
        <div>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add a Sub Category</h1>
                    </div>
                    <form onSubmit={handleAddSubCategory} >
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                            <div class="flex flex-wrap -m-2">
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="subcategoryname" class="leading-7 text-sm text-gray-600">Sub Category Name</label>
                                        <input ref={subCategoryRef} type="text" id="subcategoryname" name="subcategoryname" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
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
                                        <label for="categoryimg" class="leading-7 text-sm text-gray-600">Category Image</label>
                                        <input ref={imgRef} type="file" id="categoryimg" name="categoryimg" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="categorydescription" class="leading-7 text-sm text-gray-600">Category Description</label>
                                        <textarea ref={descriptionRef} id="categorydescription" name="categorydescription" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
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

export default AddSubCategory;