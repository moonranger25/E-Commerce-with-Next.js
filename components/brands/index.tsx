import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import Slider from 'react-slick';
import { brandContent } from '../../mock/brand';
import BrandBox from './BrandBox';

const Brands = () => {
    const settings = {

    }

    return (
        <div>
            <SectionTitle />
            <Slider {...settings}>
                {brandContent.map((brandItem) => {
                    <BrandBox

                    />
                })}
            </Slider>
        </div>
    )
} 

export default Brands;