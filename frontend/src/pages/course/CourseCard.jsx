import React from "react";
import { getImgUrl } from "../../utils/getImgUrl";
import {Link} from 'react-router-dom'
import { HiOutlineHeart } from "react-icons/hi";
function CourseBannerCard({ image, title, instructor, description, course }) {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
     <Link to={`/courses/${course._id}`}><img src={`${getImgUrl(course.coverImage)} `} alt={title} className="w-full h-40 object-cover" /></Link> 
      <div className="p-4">
        <Link to={`/courses/${course._id}`}><h2 className="text-lg font-semibold text-gray-800">{course.title}</h2></Link>
        <p className="text-sm text-gray-600 mt-1">Instructor: {course.instructor}</p>
        <p className="text-sm text-gray-600 mt-2 mb-4">{course.description.length > 70 ? `${course.description.slice(0, 70)}...`: course.description}</p>
        <p className="font-medium mb-5">INR ₹ {course?.newPrice}<span className="line-through font-normal ml-2">INR ₹ {course?.oldPrice}</span></p>
        <div className="flex justify-between items-center">
        <button className="btn-primary">
          Enroll Now
        </button>
        <button className=" "> <HiOutlineHeart className="size-5"/></button>
        </div>
      </div>
    </div>
  );
}

export default CourseBannerCard;
