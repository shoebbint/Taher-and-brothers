import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://taher-brothers-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    
    
    return [products, setProducts]
};

export default useProducts;