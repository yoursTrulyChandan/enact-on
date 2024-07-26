import React from 'react';
import leaf from "../assets/—Pngtree—five thai sweet basil leaves_4231023 1.png";
import Carousel from '../components/Carousel';
import { products } from '../data/data';
import ProductCard from '../components/ProductCard';

const Products = () => {
    return (
        <div className='relative px-16 py-32 flex flex-col gap-y-16'>
            <div className='absolute top-[-100px] z-1'>
                <img src={leaf} alt='Leaf' />
            </div>
            <div className='flex flex-col items-start z-10 relative gap-6'>
                <div className='border-b-[3px] border-yellow-600 py-2 pr-32'>
                    <p className='font-normal text-4xl text-yellow-600'>CHEF MATT PRODUCTS</p>
                </div>
                <p className='font-normal text-xl max-w-full'>Shop Gourmet Chef Quality products from the Chef Matt brand.
                    Chef it yourself and Thank us later.</p>
            </div>
            <Carousel items={products}
                renderItem={(item) => <ProductCard {...item} />}
                cardWidth={300}
                itemsToShow={4} />
        </div>
    )
}

export default Products