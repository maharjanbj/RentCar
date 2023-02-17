import React from 'react'
import './about.css'

const About = () => {
  return (
    <section>
    <div className="about">
        <div className="about_container">
            <h1>About Us</h1>
            <p>
            <b>Rental</b><br/> offers the best value vehicle hire in Nepal. With great deals on a wide range of cars, vans, SUVs rentals excellent service is built from over 10 years of experience in the field.<br/><br/>

            <b>Our Vision:</b><br/> We will be a growth-oriented vehicle rental company by efficiently providing value-conscious clients for all of their vehicle rental excuses.<br/><br/>

            <b>Our Mission:</b><br/> We will consistently produce a quality product, friendly co-operation and great value that make client’s budget is their best vehicle rental choice.<br/><br/>

            <b>Focus on quality and service:</b><br/>
            <ol>
                <li>We produce quality work for the benefit of our clients and coworkers.</li>
                <li>We give regular and reliable service that surpasses expectations and creates loyal clients.</li>
                <li>We care each day about how our work affects the state of the Budget product.</li>
                </ol><br/>
            </p><br/><br/>
            <div className='more_info'>
                <h2>For More Informations</h2>
                <ul>
                    <li><i class='fas fa-phone'>&nbsp;&nbsp;&nbsp;&nbsp;+977 98xxxxxxxx</i></li>
                    <li><i class='fas fa-at'>&nbsp;&nbsp;&nbsp;&nbsp;info@rentalcarnepal.com</i></li>
                    <li><i class='fas fa-business-time'>&nbsp;&nbsp;&nbsp;&nbsp;24/7 Service</i></li>
                </ul>
            </div>
        </div>
    </div>
    </section>
  )
}

export default About