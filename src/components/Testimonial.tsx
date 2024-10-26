import React from 'react'
import Image from 'next/image';
const Testimonial = () => {
  return (
    <div>
    <div className='container pt-16 grid-cols-2'>
        <h2 className='font-medium text-2xl pb-4'>Testimonials</h2>
        <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
        <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
            <Image 
            className="rounded-full inline-block"
            src="/mypic.png"
            width={80}
            height={80}
            alt="dp"
            />
            <h2 className='text-gray-500 font-black text-[20px]'>Syed Zain</h2>
            <p>CEO &amp; Founder of Zain&apos;s Market</p>
        
        <Image
        className='inline-block py-2'
        src="/logo.png"
        width={30}
        height={30}
        alt="quotes"
        />
        <p className='max-w-[200px] text-gray-500'>
        We offer a curated selection of premium perfumes and stylish watches, blending luxury and elegance
        </p>
    </div> 
    
    <div className='bg-red-600 bg-[url(/watch.avif)] bg-cover h-[300px] md:min-w-[500px] rounded-2xl grid place-items-center'>
    <div className='bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 grid place-items-center gap-3 px-2'>
        <button className='bg-blackish text-white p-2 rounded-md'>
              25% Discount
        </button>
        <h2 className='font-extrabold text-2xl text-[#272727]'>
            New Collection
        </h2>
        <p className='text-gray-500 text-[20px]'>
            Starting @ $20 <b>Shop Now</b>
             </p>
             </div>
            </div>
           </div>
          </div>
         </div>
  )
}

export default Testimonial;
