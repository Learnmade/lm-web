import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation} from 'swiper/modules';


import news1 from '../../assets/news/news1.jpg'
import news2 from '../../assets/news/news2.jpg'
import news3 from '../../assets/news/news3.jpg'
import news4 from '../../assets/news/news4.jpg'
import news5 from '../../assets/news/news5.jpg'
// import news6 from '../../assets/avathar/news6.png'
// import news7 from '../../assets/avathar/news7.png'


const news = 
    [
        {
          "id": 1,
          "title": "Global Tech Summit Highlights AI Advancements",
          "description": "The annual Global Tech Summit featured cutting-edge AI innovations, with tech leaders showcasing new breakthroughs and future applications.",
          "date": "2024-10-25",
          "author": "Jane Doe",
          "category": "Technology",
          "imageUrl": news1,
          "content": "The summit focused on AI's potential to transform industries, featuring talks from leaders in machine learning and artificial intelligence."
        },
        {
          "id": 2,
          "title": "Economic Growth Forecast Revised Amidst Global Uncertainty",
          "description": "Economists have revised global growth forecasts in light of recent market fluctuations and ongoing geopolitical tensions.",
          "date": "2024-10-24",
          "author": "John Smith",
          "category": "Economics",
          "imageUrl": news2,
          "content": "The revised forecasts highlight the impact of international policy changes and energy price shifts on the global economy."
        },
        {
          "id": 3,
          "title": "Wildlife Conservation Efforts Yield Positive Results",
          "description": "Conservation organizations report a steady increase in endangered species populations, signaling progress in ongoing wildlife preservation initiatives.",
          "date": "2024-10-23",
          "author": "Sarah Green",
          "category": "Environment",
          "imageUrl": news3,
          "content": "Through dedicated efforts by conservationists worldwide, several endangered species have shown population growth, reflecting successful intervention strategies."
        },
        {
          "id": 4,
          "title": "New Discoveries in Space Exploration",
          "description": "Scientists have discovered a new exoplanet in the habitable zone, sparking discussions about the potential for extraterrestrial life.",
          "date": "2024-10-22",
          "author": "Alice Brown",
          "category": "Science",
          "imageUrl": news4,
          "content": "The discovery of an exoplanet in the habitable zone of a distant star opens up new possibilities for studying planetary systems similar to our own."
        },
        {
          "id": 5,
          "title": "Global Sports Championship Results",
          "description": "Top athletes competed in the final rounds of the global championship, showcasing impressive performances across various events.",
          "date": "2024-10-21",
          "author": "Mark Johnson",
          "category": "Sports",
          "imageUrl": news5,
          "content": "The championship saw record-breaking performances, with several athletes achieving personal bests and setting new world records."
        }
      ]
      

const News = () => {
  return (
    <div>
     
        <p className='font-semibold text-2xl mb-5'>Daily News</p>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
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
            slidesPerView: 4,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
       {
         news.map((item, index)=>(
          <SwiperSlide key={index}>
              <div className=" flex-col md:flex-row bg-white border border-gray-200 rounded-lg mb-10 shadow-md p-4 max-w-md md:max-w-2xl space-y-4 md:space-y-0 md:space-x-4">
                <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-md"
                />
                <div className="flex flex-col justify-between p-2 w-full">
                    <div>
                    <span className="text-xs text-gray-500 uppercase">{item.category}</span>
                    <h2 className="text-lg font-semibold text-gray-800 mt-1">{item.title}</h2>
                    <p className="text-xs text-gray-400 mt-1">{new Date(item.date).toLocaleDateString()}</p>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.description}</p>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">By {item.author}</div>
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
