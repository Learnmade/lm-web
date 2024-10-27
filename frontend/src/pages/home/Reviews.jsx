import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation} from 'swiper/modules';


import Studentsimage1 from '../../assets/avathar/stuimage1.png'
import Studentsimage2 from '../../assets/avathar/stuimage2.png'
import Studentsimage3 from '../../assets/avathar/stuimage3.png'
import Studentsimage4 from '../../assets/avathar/stuimage4.png'
import Studentsimage5 from '../../assets/avathar/stuimage5.png'
import Studentsimage6 from '../../assets/avathar/stuimage6.png'
import Studentsimage7 from '../../assets/avathar/stuimage7.png'


const reviews = [
  {
    "studentimage":Studentsimage6,
    "studentName": "Alice Johnson",
    "courseName": "Introduction to React",
    "rating": 4.5,
    "comments": "Great course! The explanations were clear, and the hands-on examples were very helpful.",
    "date": "2024-10-20"
  },
  {
    "studentimage":Studentsimage2,
    "studentName": "Bob Smith",
    "courseName": "Advanced Python Programming",
    "rating": 4.8,
    "comments": "Really informative course! I learned so many new techniques for Python development.",
    "date": "2024-10-18"
  },
  {
    "studentimage":Studentsimage3,
    "studentName": "Catherine Lee",
    "courseName": "Web Development Basics",
    "rating": 4.2,
    "comments": "Good introduction to web development. Could have used a few more examples on CSS.",
    "date": "2024-10-15"
  },
  {
    "studentimage":Studentsimage4,
    "studentName": "Daniel Green",
    "courseName": "Data Structures and Algorithms",
    "rating": 5.0,
    "comments": "Excellent course! The instructor's explanations were very clear, and the assignments were challenging but doable.",
    "date": "2024-10-12"
  },
  {
    "studentimage":Studentsimage5,
    "studentName": "Emily Brown",
    "courseName": "IoT Basics",
    "rating": 4.7,
    "comments": "Enjoyed the course a lot! It was easy to follow, and I liked the practical projects at the end.",
    "date": "2024-10-10"
  }
]

const Reviews = () => {
  return (
    <div>
     
        <p className='font-semibold text-2xl mb-5'>Reviews</p>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
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
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
       {
         reviews.map((item, index)=>(
          <SwiperSlide key={index}>
              <div className="flex max-w-lg w-full bg-white border border-gray-200 rounded-lg shadow-md p-4 space-x-4 mb-10">
                <img 
                  src={item.studentimage} 
                  alt={item.studentName} 
                  className="object-cover w-full h-full rounded-full border border-blue-500 items-center"
                  style={{ width: '50px', height: '50px' }}
                />
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <h2 className="text-sm font-semibold text-gray-800">{item.studentName}</h2>
                    <p className="text-xs text-gray-500">{item.courseName}</p>
                    <div className="flex items-center mt-1 text-yellow-500 text-sm">
                      {"★".repeat(Math.floor(item.rating))}
                      {"☆".repeat(5 - Math.floor(item.rating))}
                      <span className="text-xs text-gray-600 ml-2">({item.rating.toFixed(1)})</span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-gray-600 line-clamp-2">{item.comments}</p>
                  <p className="text-xs text-gray-400 mt-2">Reviewed on {new Date(item.date).toLocaleDateString()}</p>
                </div>
              </div>
                    </SwiperSlide>
                  ))
                }
      </Swiper>
    </div>
  )
}

export default Reviews
