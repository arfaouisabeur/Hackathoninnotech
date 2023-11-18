// AboutUs.js

import React from 'react';
import './css/style.css';

const AboutUs = () => {
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

      <section className="about">
        <div className="row">
          <div className="image">
            <img src="images/about-img.svg" alt="" />
          </div>
          <div className="content">
            <h3>why choose us?</h3>
            <p>
              Our platform offers a multitude of features, from tamper-proof
              digital certificates to a comprehensive skill ledger,
              peer-to-peer tutoring, and much more. With the security of
              blockchain backing every transaction and achievement, both
              educators and learners can focus on what truly matters: the joy
              of learning and the pursuit of excellence. Join us on this
              exciting journey as we reshape the educational paradigm, one
              block at a time.
            </p>
            <a href="courses.html" className="inline-btn">
              our courses
            </a>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <div>
              <h3>+10k</h3>
              <p>online courses</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-user-graduate"></i>
            <div>
              <h3>+40k</h3>
              <p>brilliant students</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-chalkboard-user"></i>
            <div>
              <h3>+2k</h3>
              <p>expert tutors</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-briefcase"></i>
            <div>
              <h3>100%</h3>
              <p>job placement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h1 className="heading">student's reviews</h1>
        <div className="box-container">
          {/* ... Rest of the content from the Reviews section */}
        </div>
      </section>

      <script src="js/script.js"></script>
    </div>
  );
};

export default AboutUs;
