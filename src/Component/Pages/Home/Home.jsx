import React from 'react';
import Services from '../Service/Services';
import Product from '../Product/Product';
import Blog from '../Blog/Blog';
import Prices from '../Pricing/Prices';
import Carosel from '../Shared/Header/Carousel/Carosel';


const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <Services></Services>
            <Blog></Blog>
            <Product></Product>
            <Prices></Prices>
        </div>
    );
};

export default Home;