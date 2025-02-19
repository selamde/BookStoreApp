import React from 'react'
import heroImage from '../../assets/banner.png'

const Banner = () => {
  return (
    <>
    <div className='  flex flex-col md:flex-row-reverse md:flex-row py-16 items-center justify-between gap-12 '>
        {/* Background text */}
        <div className='absolute inset-0 flex hidden md:block font-coza justify-center items-center text-[500px] text-primary opacity-10 z-[-9999]'>
          Books
        </div>

         {/* Right of banner */}
        <div className='w-full z-10 md:w-1/2 flex items-center justify-center md:justify-end'>
            <img src={heroImage} alt="" />
        </div>
        {/* left of banner */}
        <div className='z-10 w-full  md:w-1/2'>
           <h1 className='text-2xl md:text-6xl font-bold mb-7  text-primary '>Book selling site</h1>
           <p className='mt-10 font-bold'>
            Welcome, your go-to online bookstore! Discover a wide range of books, 
            from bestsellers to hidden gems, across all genres. Whether you're looking
             for fiction, non-fiction, or academic reads, we have something for every book
              lover. Shop now and enjoy a seamless browsing and buying experience!
           </p>
           <button className='btn-primary text-white mt-2 hover:text-primary'>
            Contact
           </button>
            </div>

         
       
     
    </div>
    

    
    </>
  )
}

export default Banner