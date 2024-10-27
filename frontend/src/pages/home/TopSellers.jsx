import React, { useEffect, useState } from 'react'
import CourseBannerCard from '../course/CourseCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const catagories = ["All","programming","web development","Hacking"]
const TopSellers = () => {
    const [courses, setcourses] = useState([]);
    const [selectCatagory, setSelectCatagory] = useState("All");

    useEffect(() =>{
        fetch('courses.json')
        .then(res => res.json())
        .then((data)=>{
            setcourses(data)
        })
    },[])
    
    const filterCourses = selectCatagory === "All" ? courses : courses.filter(course => 
        course.catagory === selectCatagory.toLowerCase())
        console.log(filterCourses)
  return (
      <div className='py-10'>
        <h2 className='text-2xl font-semibold mb-6'>Top Sellers</h2>
        <div className='mb-8 flex items-centre'>
        <select
        onChange={(e)=>{setSelectCatagory(e.target.value)}}
        name="category" id="category" className='flex border bg-[#EAEAEA] px-4 py-2
         border-gray-300 rounded-md focus:outline-none'>
            {
                catagories.map((catagory, index)=>(
                    <option key={index} value={catagory}>{catagory}</option>
                ))
            }
        </select>
       
        </div>
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
           filterCourses.length > 0 && filterCourses.map((course, index)=>(
                <SwiperSlide><CourseBannerCard key={index} course={course}/></SwiperSlide>
                
            ))
        }
        
      </Swiper>
        
      </div>
  )
}

export default TopSellers
