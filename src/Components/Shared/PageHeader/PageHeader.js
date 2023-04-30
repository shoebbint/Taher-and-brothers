import React from 'react';
import img4 from '../../../images/pageheader.jpg'
const PageHeader = () => {
    return (
        <div>
<div className="hero h-96 bg-fixed" style={{ backgroundImage: `url(${img4})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
      <div className="text-sm breadcrumbs">
  <ul>
    <li><a>Home</a></li> 
    <li><a>Documents</a></li> 
    <li>Add Document</li>
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