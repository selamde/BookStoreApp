import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,  Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom';
import { news } from '../../assets/news';
const News = () => {
  return (
    <div className='container py-14'>
        <h2 className='text-3xl mb-6 font-semibold'>News</h2>
       
                <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                  }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  
                }}
                modules={[Navigation]}
                className="mySwiper"
               
              >
                 {
             news?.map((item,index)=>(
                <SwiperSlide key={index}>
                <div className='flex flex-col md:flex-row-reverse gap-3 '>
                <div className='py-4 md:w-1/2'>
                            <Link to='/'><h3 className='text-2xl font-medium hover:text-secondary mb-4'>{item.title}</h3></Link>
                            <div className='bg-primary w-12 h-[4px] rounded-full mb-5'></div>
                            <p className='text-md text-gray-700'>{item.description}</p>
                            </div>
                            <div className='w-full md:w-1/2'>
                                <img src={item.image} className='w-full    md:object-cover rounded-md ' alt={item.title}/>
                            </div>
                </div>

                </SwiperSlide>
             
                           
                            
                 
             
             ))
        }
         </Swiper>
     
       
        </div>
  )
}

export default News