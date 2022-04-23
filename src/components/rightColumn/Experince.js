import React from 'react'
import './style.css';

function Experince() {
  return (
    <div className="experience-container">
          <h2><i className="fa fa-suitcase"></i>Work Experience</h2>
        {/* Experience start */}
        <div className="Experience">
          <h5>Front End Developer / D.O.A.M group,Nigeria</h5>
          <h6 ><i className="fa fa-calendar"></i>Mar. 2022 - <span className="current-job">Current</span></h6>
          <p> Coorporate with researchers and designers to create clean interface and simple, intutive interactions and experience for marketing purpose, which increased sells by 20%.<br/><br/>Implemented EduTech landing page and dashboard,FinTech landing page and dashboard and HealthTech landing page and dashboard designs</p>
          <hr />
        </div> {/* Experience end */}
         {/* Experience start */}
         <div className="Experience">
          <h5>Front End Developer / KordTechnology, Lagos</h5>
          <h6 ><i className="fa fa-calendar"></i>Feb. 2021 - <span>Mar. 2022 </span></h6>
          <p> Completed full redesigns of existing websites to
          improve navigation, enhance visuals and strengthen
          search engine rankings.</p>
          <hr />
        </div> {/* Experience end */}
         {/* Experience start */}
         <div className="Experience">
          <h5>Front End Developer / Amah Royal Family, Edo</h5>
          <h6 ><i className="fa fa-calendar"></i>Feb. 2020 - <span>Jan. 2021 </span></h6>
          <p> Worked with stakeholders to plan, research, design and implemented BusinessTech web aplication design. </p>
          <hr />
        </div> {/* Experience end */}
    </div>
  )
}

export default Experince