import React from 'react';
import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from 'react-icons/bi';

const course=[
    {
        title:"Web Development",
        icon:<BiLogoHtml5/>,
    },

    {
        title:"App Development",

        icon:<BiLogoAndroid/>,
    },

    {
        title:"UI & UX",

        icon:<BiBuilding/>,
    },


];
const Card = () => {
  return (
    <div className="card--container">
        {course.map((item) => (
            <div className="card">
                <div className="card--cover">{item.icon}</div>
                <div className="card--title">
                    <h2>{item.title}</h2>
                    </div>
                    </div>


       ))}
    </div>
  );
};

export default Card;