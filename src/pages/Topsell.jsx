import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,  Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const categories =["Choose a category",
                  "Adventure","Biography",
                  "Cooking","Fiction",
                  "History","Non-Fiction",
                  "Poetry","business"];

const Topsell = () => {
    const [books, setBooks] = useState([]);
    
    const [selectedCategory, setSelectedCategory] = useState("Choose a category");
  useEffect(()=>{
   fetch("book.json")
   .then(res => res.json())
   .then((data)=>{
     setBooks(data);
     console.log(data);
   });
  },[]);
  
  const filterBooks = selectedCategory === "Choose a category"? books : books.filter(book =>
    book.category === selectedCategory.toLocaleLowerCase()
  )

  console.log(filterBooks);




    return (
    <div className='py-10'>
        <h2 className='text-3xl font-bold mb-6'>Top Seller</h2>
        <div className='mb-8 flex items-center'>
            <select onChange={(e)=> setSelectedCategory(e.target.value)} className='border-1  border-primary focus:outline-none rounded-md' name="category" id="category">
                {
                    categories?.map((items)=>(
                        <option className='text-sm md:text-2xl' key={items}>{items}</option>
                    ))
                }
            </select>
            
        </div>
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
         filterBooks.length > 0 && filterBooks.map((books, index)=>(
             <SwiperSlide key={index}>
                <Card books={books} />
             </SwiperSlide>
              
          ))
        }
        
      </Swiper>
      
        
     
     


    </div>
  )
}

export default Topsell