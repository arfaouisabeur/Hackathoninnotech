// ContactUs.js

import React from 'react';
import './css/style.css';

const ContactUs = () => {
  return (
    <div>
      <header className="header">
        <section className="flex">
          <a href="home.html" className="logo">
            Educhain
          </a>
          <form action="search.html" method="post" className="search-form">
            <input
              type="text"
              name="search_box"
              required
              placeholder="search courses..."
              maxLength="100"
            />
            <button type="submit" className="fas fa-search"></button>
          </form>
          <div className="icons">
            <div id="menu-btn" className="fas fa-bars"></div>
            <div id="search-btn" className="fas fa-search"></div>
            <div id="user-btn" className="fas fa-user"></div>
            <div id="toggle-btn" className="fas fa-sun"></div>
          </div>
          <div className="profile">
            <img src="images/pic-1.jpg" className="image" alt="" />
            <h3 className="name">Ayhem Arbi</h3>
            <p className="role">Student</p>
            <a href="profile.html" className="btn">
              view profile
            </a>
            <div className="flex-btn">
              <a href="login.html" className="option-btn">
                login
              </a>
              <a href="register.html" className="option-btn">
                register
              </a>
            </div>
          </div>
        </section>
      </header>

      <div className="side-bar">
        <div id="close-btn">
          <i className="fas fa-times"></i>
        </div>
        <div className="profile">
          <img src="images/pic-1.jpg" className="image" alt="" />
          <h3 className="name">Ayhem Arbi</h3>
          <p className="role">Student</p>
          <a href="profile.html" className="btn">
            view profile
          </a>
        </div>
        <nav className="navbar">
          <a href="home.html">
            <i className="fas fa-home"></i>
            <span>home</span>
          </a>
          <a href="about.html">
            <i className="fas fa-question"></i>
            <span>about</span>
          </a>
          <a href="courses.html">
            <i className="fas fa-graduation-cap"></i>
            <span>courses</span>
          </a>
          <a href="teachers.html">
            <i className="fas fa-chalkboard-user"></i>
            <span>teachers</span>
          </a>
          <a href="contact.html">
            <i className="fas fa-headset"></i>
            <span>contact us</span>
          </a>
        </nav>
      </div>

      <section className="contact">
        <div className="row">
          <div className="image">
            <img src="images/contact-img.svg" alt="" />
          </div>
          <form action="" method="post">
            <h3>get in touch</h3>
            <input
              type="text"
              placeholder="enter your name"
              name="name"
              required
              maxLength="50"
              className="box"
            />
            <input
              type="email"
              placeholder="enter your email"
              name="email"
              required
              maxLength="50"
              className="box"
            />
            <input
              type="number"
              placeholder="enter your number"
              name="number"
              required
              maxLength="50"
              className="box"
            />
            <textarea
              name="msg"
              className="box"
              placeholder="enter your message"
              required
              maxLength="1000"
              cols="30"
              rows="10"
            ></textarea>
            <input
              type="submit"
              value="send message"
              className="inline-btn"
              name="submit"
            />
          </form>
        </div>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-phone"></i>
            <h3>phone number</h3>
            <a href="tel:1234567890">+21620506118</a>
            <a href="tel:1112223333">+21654021477</a>
          </div>

          <div className="box">
            <i className="fas fa-envelope"></i>
            <h3>email address</h3>
            <a href="mailto:ayhem.arbi1@gmail.com">ayhem.arbi1@gmail.com</a>
            <a href="mailto:Yahyaouimalekk@gmail.com">Yahyaouimalekk@gmail.com</a>
          </div>

          <div className="box">
            <i className="fas fa-map-marker-alt"></i>
            <h3>office address</h3>
            <a href="#">
              flat no. 1, a-1 building, Avenue Habib Bourguiba Bardo
            </a>
          </div>
        </div>
      </section>
      <script src="js/script.js"></script>
    </div>
  );
};

export default ContactUs;
