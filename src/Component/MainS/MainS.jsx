import React from 'react';
import logo1 from '../../assets/slider-image-1.jpeg';
import logo2 from '../../assets/slider-image-2.jpeg';
import logo3 from '../../assets/slider-image-3.jpeg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function MainS() {
    var settings = {
        autoplaySpeed:4000,
        arrows:false,
        autoplay:true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className='flex justify-between md:flex-row flex-col overflow-hidden'>
                <Slider className=' w-full md:w-[68.09%]' {...settings}>
                        <img src={logo3} className='w-[70.2%]' alt="" />
                        <img src={logo1} className='w-[70.2%]' alt="" />
                </Slider>
                <div className="flex w-full md:flex-col justify-between gap-x-7">
                <div className="w-full">
                    <img src={logo1} alt="" />
                </div>
                <div className="w-full">
                    <img src={logo2} alt="" />
                </div>
            </div>    
            </div>
        </>
    );
}

{/* <div className="flex w-1/3 flex-col gap-y-7">
<div className="w-full">
<img src={logo1} alt="" />
</div>
<div className="w-full">
<img src={logo2} alt="" />
</div>
</div>
</div> */}
{/* <div className="flex w-1/3 flex-col gap-y-7">
<div className="w-full">
    <img src={logo1} alt="" />
</div>
<div className="w-full">
    <img src={logo2} alt="" />
</div>
</div> */}