import React from 'react';
import { BiNotification, BiSearch } from 'react-icons/bi';
const ContentHeader = () => {
  return (
    
    <div className="content--header">
        <h1 className="header--title">DashBoard</h1>

        <div className="header--activity">

        <div className="Search-box">
    <input type="text" placeholder="Search..."/>
    <BiSearch className="icon"/>
    </div>
    <div className="notify">
    <BiNotification className="icon"/>
    </div>
    </div>
    </div>
        
  );
};

export default ContentHeader;