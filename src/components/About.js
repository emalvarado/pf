import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id='about'>
        <section id="testimonials">
          <div className="text-container">
                <h2>About Me</h2>
            <div className="row">
              {/* <div className="two columns header-col"> */}
                {/* <h1><span>Client Testimonials</span></h1> */}
              {/* </div> */}
              <div className="nine columns main-col">

                <p>
                  {
                    resumeData.aboutme
                  }
                </p>

                {/* <div className="row"> */}

                  {/* <div className="columns contact-details">

                    <h2>Contact Details</h2>
                    <p className="address">
                      <span>{resumeData.name}</span>
                      <br></br>
                      <span>
                        {resumeData.address}
                      </span>
                      <br></br>
                      <span>{resumeData.website}</span>
                    </p>
                  </div> */}
                {/* </div> */}
              </div>
            </div> {/* row ends */}
          </div>  {/* text-container ends */}
        </section>
      </section>


      // <section id="about">
      //   <div className="row">

      //     <div className="three columns">

      //       <img className="profile-pic" src="public/images/profilepic.jpg" alt="" />

      //     </div>

      //     <div className="nine columns main-col">

      //       <h2>About Me</h2>
      //       <p>
      //         {
      //           resumeData.aboutme
      //         }
      //       </p>

      //       <div className="row">

      //         <div className="columns contact-details">

      //           <h2>Contact Details</h2>
      //           <p className="address">
      //             <span>{resumeData.name}</span>
      //             <br></br>
      //             <span>
      //               {resumeData.address}
      //             </span>
      //             <br></br>
      //             <span>{resumeData.website}</span>
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
    );
  }
}