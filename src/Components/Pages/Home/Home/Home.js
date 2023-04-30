import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Categories from '../Categories/Categories';
import PopularProducts from '../PopularProducts/PopularProducts';
import Section1 from '../Section1/Section1';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <Banner></Banner>
            <Section1></Section1>
            <Categories></Categories>
            <PopularProducts></PopularProducts>
            <Brands></Brands>
        </div>
    );
};

export default Home;