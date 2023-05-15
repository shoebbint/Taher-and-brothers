import React, { useEffect, useState } from 'react';
import img1 from "../../../../images/WhatsApp Image 2023-05-06 at 12.23.47 PM.jpeg"
import { Link } from 'react-router-dom';
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
      fetch('https://taher-brothers-server.vercel.app/categories')
          .then(res => res.json())
          .then(data => setCategories(data));
  }, [])
  return (

<div className='grid grid-cols-3 mx-10 gap-8 '>
{
                    categories.map(category => 
          
<div  className="card  image-full" key={category._id}>
  {category?.img &&
  <figure className=''><img src={category.img} alt="Category" /></figure>}
  <div className="bg-transparent card-body items-center text-center mt-80">
    <h2 className="card-title">{category.name}</h2>
    <p>{category.description}</p>
    <div className="card-actions justify-end">
      <Link  to={`/subcategories/${category._id}`}><button className="btn btn-primary">Explore</button></Link>
    </div>
  </div>
</div>
)}
</div>

  );
};

export default Categories;