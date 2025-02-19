import React from 'react'

import { TiShoppingCart } from "react-icons/ti";
import { getImgUrl } from '../utils/getImgUrl';

const Card = ({books} ) => {
  return (
    <div className=' container rounded-lg transition-shadow duration-300'>
        <div className=' flex items-center justify-center flex-col sm:flex-row sm:items-center sm:h-72 font-secondary sm:justify-center gap-4'>      
      

         <>
         
         <div className='sm:h-72 sm:flex-shrink-0 rounded-m'>
             <div>
                 <a href="/">
                 <img src={`${getImgUrl(books.coverImage)}`} alt={books.title}
                 className='w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200'
                 />        
                 </a>
             </div>
         </div>
      
         <div className='p-5 md:py-7 font-secondary'>
             <h2 className='font-extraBold'>{books.title? books.title:'no-title'}</h2>
             <p className='font-primary text' >{books?.description.length > 50? `${books.description.slice(0,30)}...`:`${books.description}`}</p>
             <p className='font-medium'>Br{books.newPrice}
                 <span className='line-through text-red-500 ml-4'>Br{books.oldPrice}</span>
             </p>
             <button className='btn-primary text-white mt-4  flex items-center  hover:text-primary text-sm md:text-md  '>
             <TiShoppingCart className=' relative size-6 ' />
             <span className='hidden md:block  md:text-[10px]'>Add to cart</span>
                 
             </button>
             
         </div>
         </>
         
     
 
     </div>
    </div>
   
  )
}

export default Card