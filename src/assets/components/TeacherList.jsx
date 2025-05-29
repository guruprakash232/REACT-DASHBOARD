import React from 'react';
import "../../styles/teacherlist.css";
import Image1 from "../image1.jpeg";
import Image2 from "../image2.jpeg";
import Image3 from "../image3.jpeg";
import Image4 from "../image4.jpeg";

const teachers = [
  {
    image: Image1,
    name: "prof.Jessi",
    duration: "15 Hours lesson",
    cost: "1500",
  },
  {
    image: Image2,
    name: "prof.Geetha ",
    duration: "20 Hours lesson",
    cost: "1750",
  },
  {
    image: Image3,
    name: "prof.Hema",
    duration: "28 Hours lesson",
    cost: "3000",
  },
  {
    image: Image4,
    name: "prof.Lakshmi",
    duration: "40 Hours lesson",
    cost: "2000",
  },
];

const TeacherList = () => {
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Teachers</h2>
        <select>
          <option value="english">English</option>
          <option value="hindi">Tamil</option>
          <option value="hindi">Hindi</option>
          <option value="hindi">Malayalam</option>
          <option value="hindi">Telugu</option>
        </select>
      </div>
      <div className="list--container">
        {teachers.map((teacher, index) => (
          <div className="list" key={index}>
            <div className="teacher--detail">
              <img src={teacher.image} alt={teacher.name} />
              <h2>{teacher.name}</h2>
            </div>
            <div className="teacher--pricing">
              <span>{teacher.duration}</span>
              <span>₹{teacher.cost}/hr</span>
              <span className="teacher--todo">:</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;