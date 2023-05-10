import React, { useState } from 'react';
import img4 from '../../../images/pageheader.jpg'
import img5 from '../../../images/pageheader3.jpg'
import img6 from '../../../images/pageheader7.jpg'
import img7 from '../../../images/pageheader6.jpg'
import { Link, useLocation } from 'react-router-dom';
const PageHeader = () => {
  const location = useLocation();
  const [pgName,setPgName]=useState("")
  const pageName=location.pathname.split("/")[1];
  // const loc=setPgName(pageName);
  let backgroundImageUrl;


  if (pageName === 'shop') {
    backgroundImageUrl = `url(${img4})`;
  } else if (pageName === 'contact') {
    backgroundImageUrl = `url(${img5})`;
  } else if (pageName === 'about') {
    backgroundImageUrl = `url(${img6})`;
  } else if (pageName === 'subcategories') {
    backgroundImageUrl = `url(${img7})`;
  } else {
    // set a default background image URL here
  }
  const styles = {
    pg:{
    backgroundImage: `url(${img4})`
    }
  };
    return (
        <div>
<div className="hero pg h-96 bg-fixed" style={{backgroundImage: backgroundImageUrl}} >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{pageName}</h1>
      <div className="text-sm breadcrumbs">
  <ul>
  <li> <Link to={"/"}><a>Home</a></Link> </li>
    <li><a>Documents</a></li> 
    <li>{pageName}</li>
  </ul>
</div>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};
// {{" background-image: `url(${img4})`"}}
export default PageHeader;