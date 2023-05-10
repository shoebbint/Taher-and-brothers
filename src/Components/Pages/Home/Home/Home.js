import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Categories from '../Categories/Categories';
import PopularProducts from '../PopularProducts/PopularProducts';
import Section1 from '../Section1/Section1';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Section1></Section1>
            <h1 className='font-mono text-4xl p-5'>Explore By Categories</h1>
            <Categories></Categories>
            <h1 className='font-mono text-4xl p-10'>Most Popular Products</h1>
            <PopularProducts></PopularProducts>
            <Brands></Brands>
        </div>
    );
};

export default Home;