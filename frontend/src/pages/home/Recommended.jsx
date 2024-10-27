import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CourseBannerCard from '../course/CourseCard';
const Recommended = () => {
        const [courses, setcourses] = useState([]);
    
        useEffect(() =>{
            fetch('courses.json')
            .then(res => res.json())
            .then((data)=>{
                setcourses(data)
            })
        },[])
  return (
    <div className='py-16'>
       <h2 className='text-2xl font-semibold mb-6'>Recommended for you </h2>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 4,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
           courses.length > 0 && courses.slice(2,7).map((course, index)=>(
                <SwiperSlide><CourseBannerCard key={index} course={course}/></SwiperSlide>
                
            ))
        }
        
      </Swiper>
    </div>
  )
}

export default Recommended 
