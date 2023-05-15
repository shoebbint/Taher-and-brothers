import React, { useEffect, useRef, useState } from 'react';

const AddSubCategory = () => {
    const [categories, setCategories] = useState([]);
useEffect(() => {
    fetch('https://taher-brothers-server.vercel.app/categories')
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
        const response = fetch("https://taher-brothers-server.vercel.app/addsubcategory", {
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
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add a Sub Category</h1>
                    </div>
                    <form onSubmit={handleAddSubCategory} >
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="subcategoryname" className="leading-7 text-sm text-gray-600">Sub Category Name</label>
                                        <input ref={subCategoryRef} type="text" id="subcategoryname" name="subcategoryname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="categoryid" className="leading-7 text-sm text-gray-600">Select Category</label>
                                        <select ref={categoryIdRef}  id="categoryid" name="categoryid" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                            {
                                                categories.map(category=>
                                                    <option value={category._id}>Engine items</option>
                                                )
                                            }
                                   
                  
                                            </select>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="categoryimg" className="leading-7 text-sm text-gray-600">Category Image</label>
                                        <input ref={imgRef} type="file" id="categoryimg" name="categoryimg" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="categorydescription" className="leading-7 text-sm text-gray-600">Category Description</label>
                                        <textarea ref={descriptionRef} id="categorydescription" name="categorydescription" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
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