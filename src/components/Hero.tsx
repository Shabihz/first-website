"use client";
import React from 'react'
import Slider from "react-slick";
import Slide from './Slides';
const Hero = () => {
    const settings={
        dots:true,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        pauseOnHover:false,
    };
    const slideData =[
        {
            id:0,
            img:"/perfume1.avif",
            title:'Trending Item',
            mainTitle:"WOMEN'S LATEST PERFUME SALE",
            price:"$20",
        },
        {
            id:1,
            img:"/perfume4.jfif",
            title:'Trending Accessories',
            mainTitle:"MEN'S PERFUME SALE",
            price:"$15",
        },
        {
            id:2,
            img:"/watch2.avif",
            title:'Sales Offer',
            mainTitle:"MEN'S WATCHES SALE",
            price:"$30",
        }
        

        
]
  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
        {slideData.map((items)=>(
            <Slide
                key={items.id} 
                img={items.img} 
                title={items.title}
                 mainTitle={items.mainTitle}
                  price={items.price}
                   />
            ))}  
            </Slider>  
        

      </div>
    </div>
  )
}

export default Hero
