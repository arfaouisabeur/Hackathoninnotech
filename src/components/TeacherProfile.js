// TeacherProfile.js

import React from 'react';


const TeacherProfile = () => {
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
            <h3 className="name">shaikh anas</h3>
            <p className="role">studen</p>
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

      <section className="teacher-profile">
        <h1 className="heading">profile details</h1>
        <div className="details">
          <div className="tutor">
            <img src="images/pic-2.jpg" alt="" />
            <h3> </h3>
            <span>developer</span>
          </div>
          <div className="flex">
            <p>
              total playlists : <span>4</span>
            </p>
            <p>
              total videos : <span>18</span>
            </p>
            <p>
              total likes : <span>1208</span>
            </p>
            <p>
              total comments : <span>52</span>
            </p>
          </div>
        </div>
      </section>

      <section className="courses">
        <h1 className="heading">our courses</h1>
        <div className="box-container">
          <div className="box">
            <div className="thumb">
              <img src="images/thumb-1.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete HTML tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>

          {/* Add similar code blocks for other courses */}

        </div>
      </section>

      <script src="js/script.js"></script>
    </div>
  );
};

export default TeacherProfile;
