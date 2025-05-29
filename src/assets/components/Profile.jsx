import React from 'react';
import ProfileHeader from "./ProfileHeader";
import "../../Styles/profile.css";
import userImage from "../userImage.jpg";
import { BiBook } from 'react-icons/bi';


const courses=[
  {
    title:"HTML & CSS",
    duration:"10 Hours",
    icon:<BiBook />
  },
  {
    title:"React Js",
    duration:"15 Hours",
    icon:<BiBook />
  },
  {
    title:"Node Js",
    duration:"30 Hours",
    icon:<BiBook />
  },
  {
    title:"Angular",
    duration:"30 Hours",
    icon:<BiBook />
  },


]
const Profile = () => {
  return (
 <div className="profile">
  <ProfileHeader />
  <div className="user--profile">
    <div className="user--detail">
      <img src={userImage} alt=""/>
      <h3 className="username">Prof.Sudha Baskhar</h3>
      <span className="profession">SoftSkill Expert</span>

    </div>
    <div className="user-courses">
      {courses.map((courses)=> (
        <div className="course">
          <div className="course--detail">
          <div className="course--cover">{courses.icon}</div>
          <div className="course-name">
            <h5 className="title">{courses.title}</h5>
            <span className="duration">{courses.duration}</span>
            </div>
</div>
<div className="sction">:</div>
 </div>
      ))}
   
  </div>
 </div>
 </div>
  );
};

export default Profile;