//import { title } from 'process'
import React from 'react'
import ProductCard from './ProductCard';
 const productData=[
  {
    img:"/watch3.png",
    title:"Watches",
    desc:"Pocket Watch Leather Pocket",
    rating:4,
    price:20.00,

   },
  
    {
     img:"/perfumetalc.png",
     title:"Perfume Talc",
     desc:" Delicately scented with a blend of floral and warm notes",
     rating:3,
     price:58.00,

    },
    {
        img:"/watch4.avif",
        title:"Watches",
        desc:"Smart Watches vitel Plus",
        rating:4,
        price:20.00,
   
       },
       {
        img:"/pocketwatch.jpg",
        title:"Watches",
        desc:"Pocket Watch Leather ",
        rating:4,
        price:20.00,
   
       },
       {
        img:"/watch5.png",
        title:"Watches",
        desc:"Beautiful Golden Watch",
        rating:4,
        price:20.00,
   
       },
       {
        img:"/perfume6.png",
        title:"Ladies Perfume",
        desc:" It's the essence of luxury",
        rating:4,
        price:250.00,
       },
       {
        img:"/perfume5.png",
        title:"Men's Perfume",
        desc:"Buy two only $350",
        rating:4,
        price:250.00,
       },
       {
        img:"/perfume8.png",
        title:"Ladies Perfume",
        desc:"Order now limited stock avaliable",
        rating:5,
        price:250.00,
       }
    ];

   


const NewProducts = () => {
  return (
    <div>
    <div className='container pt-16 ' >
        <h2 className='font-medium text-2xl pb-4'>New Product</h2>

        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
            {productData.map((item,index)=>(
                <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts
