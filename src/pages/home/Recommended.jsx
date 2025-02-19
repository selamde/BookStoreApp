import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,  Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Card from '../../components/Card';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Recommended = () => {
  const [books, setBooks] = useState([]);
    useEffect(()=>{
     fetch("book.json")
     .then(res => res.json())
     .then((data)=>{
       setBooks(data);
       console.log(data);
     });
    },[]);

  return (
    <div>
      <h2 className='text-3xl font-semibold mb-6'>Recommended section</h2>
      <Swiper
        navigation={true} 
        slidesPerView={1}
        spaceBetween={30}
       
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
          {
        books.length > 0 && books.slice(0,7).map((books, index)=>(
             <SwiperSlide key={index}>
                <Card books={books} />
             </SwiperSlide>
              
          ))
        }
        
      </Swiper>
    </div>
  )
}

export default Recommended