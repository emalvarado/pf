import React, { Component } from 'react';
import './Portfolio.scss'
import Slider from "react-slick";
import apptImg from '../images/LS/appt.png'
import availImg from '../images/LS/avail.png'
import contactImg from '../images/LS/contact.png'
import homepageImg from '../images/LS/homepage.png'
import loginImg from '../images/LS/login.png'
import scheduleImg1 from '../images/LS/schedule1.png'
import scheduleImg2 from '../images/LS/schedule2.png'
import scheduleImg3 from '../images/LS/schedule3.png'


export default class Porfolio extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      fade: true,
      rows: 2,
    }
    return (
      <section id="portfolio">
        {/* <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <img src="public/images/portfolio/coffee.jpg" alt=""/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div> */}


        <div className='portfolio-header'>
          <h2>Portfolio</h2>
          <p>Here is a sample of some of my work!</p>
        </div>

        <div className='portfolioPiece-container'>
          <div className='slider-container'>
            <Slider {...settings} className='slider'>
              <div>
                <img src={homepageImg} alt="" />
              </div>
              <div className='LS-image-description'>
                Homepage. Used parallax for scroll effect.
              </div>
              <div>
                <img src={scheduleImg1} alt="" />
              </div>
              <div className='LS-image-description'>
                Schedule Page. This is what appears when user is not logged in.
              </div>
              <div>
                <img src={contactImg} alt="" />
              </div>
              <div className='LS-image-description'>
                Contact Page. Implemented NodeMailer for user to easily contact trainer.
              </div>
              <div>
                <img src={loginImg} alt="" />
              </div>
              <div className='LS-image-description'>
                Login Page. Used BCrypt for login security.
              </div>
              <div>
                <img src={scheduleImg3} alt="" />
              </div>
              <div className='LS-image-description'>
                Schedule Page. This is the admin view of the schedule page.
                <br />
                All client appointments will show up in this table.
              </div>
              <div>
                <img src={availImg} alt="" />
              </div>
              <div className='LS-image-description'>
                Schedule Page. This is the admin view for adding availability to the schedule.
              </div>
              <div>
                <img src={scheduleImg2} alt="" />
              </div>
              <div className='LS-image-description'>
                Schedule Page. This is the client view of the schedule page.
                <br />
                All client's appointments will render in this table.
              </div>
              <div>
                <img src={apptImg} alt="" />
              </div>
              <div className='LS-image-description'>
                Schedule Page. This is the client's view for adding an appointment.
                <br />
                Implemented Stripe as the payment gateway.
              </div>
            </Slider>
          </div>
          <div className='info-container'>
            <h3>Lean Sciences:</h3>
            <p>a personally created full stack website for a personal training business, where clients can make appointments for training sessions from an availability set by the employee. </p>
            <h3>Technologies Used:</h3>
            <p>React | NodeJS | PostgresSQL | Socket.io | Stripe | NodeMailer | Sass | CSS3 | HTML5 | Redux | Axios | Express | Massive | Bcrypt | Heroku </p>

            <ul>
              <li>Socket.io implemented for both clients and employees to be updated in real time</li>
              <li>Integrated axios calls to backend server to load and update data from PostgresSQL database</li>
              <li>Used React to create components viewed through different browser routes, made responsive with CSS</li>
              <li>Integrated Redux to hold and manage state</li>
              <li>Backend is running on Node, using Express as a server and Massive to connect to  database</li>
              <li>Hit RESTful API's to retrieve and display data</li>
            </ul>

            <div className='button-container'>
            <a href="https://emalvarado.com/#/"><button>Live Site</button></a>
            <a href="https://github.com/emalvarado/LeanSciences"><button>GitHub</button></a>
            </div>
          </div>
        </div>

        <div className='portfolioPiece-container'>
          
          <div className='info-container'>
            <h3>Kanoo:</h3>
            <p>An app to help manage your travel plans, with ability to add budget expenses, activities, locations, and more. </p>
            <h3>Technologies Used:</h3>
            <p>React | NodeJS | PostgresSQL | Sass | CSS3 | HTML5 | Redux | Axios | Express | Massive | Bcrypt | Heroku </p>

            <ul>
              <li>Socket.io implemented for both clients and employees to be updated in real time</li>
              <li>Integrated axios calls to backend server to load and update data from PostgresSQL database</li>
              <li>Used React to create components viewed through different browser routes, made responsive with CSS</li>
              <li>Integrated Redux to hold and manage state</li>
              <li>Backend is running on Node, using Express as a server and Massive to connect to  database</li>
              <li>Hit RESTful API's to retrieve and display data</li>
            </ul>

            <div className='button-container'>
              <button>Live Site</button>
              <button>GitHub</button>
            </div>
          </div>
          <div className='slider-container'>
            <Slider {...settings} className='slider'>
              <div>
                <img src={homepageImg} alt="" />
              </div>
              <div className='LS-image-description'>
                Homepage. Used parallax for scroll effect.
              </div>
              <div>
                <img src={scheduleImg1} alt="" />
              </div>
              <div className='LS-image-description'>
                Schedule Page. This is what appears when user is not logged in.
              </div>
              <div>
                <img src={contactImg} alt="" />
              </div>
              <div className='LS-image-description'>
                Contact Page. Implemented NodeMailer for user to easily contact trainer.
              </div>
              <div>
                <img src={loginImg} alt="" />
              </div>
              <div className='LS-image-description'>
                Login Page. Used BCrypt for login security.
              </div>
              <div>
                <img src={scheduleImg3} alt="" />
              </div>
              <div className='LS-image-description'>
                Schedule Page. This is the admin view of the schedule page.
                <br />
                All client appointments will show up in this table.
              </div>
              <div>
                <img src={availImg} alt="" />
              </div>
              <div className='LS-image-description'>
                Schedule Page. This is the admin view for adding availability to the schedule.
              </div>
              <div>
                <img src={scheduleImg2} alt="" />
              </div>
              <div className='LS-image-description'>
                Schedule Page. This is the client view of the schedule page.
                <br />
                All client's appointments will render in this table.
              </div>
              <div>
                <img src={apptImg} alt="" />
              </div>
              <div className='LS-image-description'>
                Schedule Page. This is the client's view for adding an appointment.
                <br />
                Implemented Stripe as the payment gateway.
              </div>
            </Slider>
          </div>
        </div>

      </section>
    );
  }
}