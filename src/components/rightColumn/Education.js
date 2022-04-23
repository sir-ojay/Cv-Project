import React from 'react'
import './style.css';

function Education() {
  return (
    <div className="education-container">

        <h2><i className="fa fa-certificate "></i>Education</h2>
        {/* Experience start */}
        <div className="Experience">
          <h5>Lagos State University</h5>
          <h6 ><i className="fa fa-calendar"></i> 2014 - <span> 2019 </span></h6>
          <p> Bsc. Mechanical Engineering</p>
          <hr />
        </div> {/* Experience end */}
         {/* Experience start */}
         <div className="Experience">
          <h5>Command Secondary School, Ipaja, Lagos</h5>
          <h6 ><i className="fa fa-calendar"></i> 2006 - <span> 2012 </span></h6>
          <p> West Africa Certificate</p>
          <hr />
        </div> {/* Experience end */}
         
    </div>
  )
}

export default Education