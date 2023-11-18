// Teachers.js

import React from 'react';
import './css/style.css';

const Teachers = () => {
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

      <section className="teachers">
        <h1 className="heading">expert teachers</h1>
        <form action="" method="post" className="search-tutor">
          <input
            type="text"
            name="search_box"
            placeholder="search tutors..."
            required
            maxLength="100"
          />
          <button type="submit" className="fas fa-search" name="search_tutor"></button>
        </form>
        <div className="box-container">
          {/* Repeat the following block for each teacher */}
          <div className="box">
            <div className="tutor">
              <img src="images/pic-2.jpg" alt="" />
              <div>
                <h3>Ayhem Arbi</h3>
                <span>developer</span>
              </div>
            </div>
            <p>total playlists : <span>4</span></p>
            <p>total videos : <span>18</span></p>
            <p>total likes : <span>1208</span></p>
            <a href="teacher_profile.html" className="inline-btn">
              view profile
            </a>
          </div>
          <div className="box">
            <div className="tutor">
              <img src="images/pic-2.jpg" alt="" />
              <div>
                <h3>Ayhem Arbi</h3>
                <span>developer</span>
              </div>
            </div>
            <p>total playlists : <span>4</span></p>
            <p>total videos : <span>18</span></p>
            <p>total likes : <span>1208</span></p>
            <a href="teacher_profile.html" className="inline-btn">
              view profile
            </a>
          </div>
          <div className="box">
            <div className="tutor">
              <img src="images/pic-2.jpg" alt="" />
              <div>
                <h3>Ayhem Arbi</h3>
                <span>developer</span>
              </div>
            </div>
            <p>total playlists : <span>4</span></p>
            <p>total videos : <span>18</span></p>
            <p>total likes : <span>1208</span></p>
            <a href="teacher_profile.html" className="inline-btn">
              view profile
            </a>
          </div>
          <div className="box">
            <div className="tutor">
              <img src="images/pic-2.jpg" alt="" />
              <div>
                <h3>Ayhem Arbi</h3>
                <span>developer</span>
              </div>
            </div>
            <p>total playlists : <span>4</span></p>
            <p>total videos : <span>18</span></p>
            <p>total likes : <span>1208</span></p>
            <a href="teacher_profile.html" className="inline-btn">
              view profile
            </a>
          </div>
          <div className="box">
            <div className="tutor">
              <img src="images/pic-2.jpg" alt="" />
              <div>
                <h3>Ayhem Arbi</h3>
                <span>developer</span>
              </div>
            </div>
            <p>total playlists : <span>4</span></p>
            <p>total videos : <span>18</span></p>
            <p>total likes : <span>1208</span></p>
            <a href="teacher_profile.html" className="inline-btn">
              view profile
            </a>
          </div>
          <div className="box">
            <div className="tutor">
              <img src="images/pic-2.jpg" alt="" />
              <div>
                <h3>Ayhem Arbi</h3>
                <span>developer</span>
              </div>
            </div>
            <p>total playlists : <span>4</span></p>
            <p>total videos : <span>18</span></p>
            <p>total likes : <span>1208</span></p>
            <a href="teacher_profile.html" className="inline-btn">
              view profile
            </a>
          </div>
          {/* Repeat block end */}
        </div>
      </section>

      <script src="js/script.js"></script>
    </div>
  );
};

export default Teachers;
