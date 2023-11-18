// Courses.js

import React from 'react';
import './css/style.css';

const Courses = () => {
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

      <section className="courses">
        <h1 className="heading">our courses</h1>

        <div className="box-container">
          {/* Replace the following with your dynamic content */}
          <div className="box">
            <div className="tutor">
              <img src="images/pic-2.jpg" alt="" />
              <div className="info">
                <h3>Marwen Essalah</h3>
                <span>18-07-2023</span>
              </div>
            </div>
            <div className="thumb">
              <img src="images/thumb-1.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete HTML tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>
          {/* Repeat the above structure for each course */}
        </div>
      </section>

      <script src="js/script.js"></script>
    </div>
  );
};

export default Courses;
