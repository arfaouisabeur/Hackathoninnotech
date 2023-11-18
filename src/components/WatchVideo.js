// WatchVideo.js

import React from 'react';


class WatchVideo extends React.Component {
  render() {
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

        <section className="watch-video">
          <div className="video-container">
            <div className="video">
              <video src="images/vid-1.mp4" controls poster="images/post-1-1.png" id="video"></video>
            </div>
            <h3 className="title">complete HTML tutorial (part 01)</h3>
            <div className="info">
              <p className="date">
                <i className="fas fa-calendar"></i>
                <span>22-10-2022</span>
              </p>
              <p className="date">
                <i className="fas fa-heart"></i>
                <span>44 likes</span>
              </p>
            </div>
            <div className="tutor">
              <img src="images/pic-2.jpg" alt="" />
              <div>
                <h3>Ahmed Ayari</h3>
                <span>developer</span>
              </div>
            </div>
            <form action="" method="post" className="flex">
              <a href="playlist.html" className="inline-btn">
                view playlist
              </a>
              <button>
                <i className="far fa-heart"></i>
                <span>like</span>
              </button>
            </form>
            <p className="description"></p>
          </div>
        </section>

        <section className="comments">
          <h1 className="heading">5 comments</h1>
          <form action="" className="add-comment">
            <h3>add comments</h3>
            <textarea
              name="comment_box"
              placeholder="enter your comment"
              required
              maxLength="1000"
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="add comment" className="inline-btn" name="add_comment" />
          </form>

          <h1 className="heading">user comments</h1>

          <div className="box-container">
            {/* User comments go here */}
          </div>
        </section>

        <script src="js/script.js"></script>
      </div>
    );
  }
}

export default WatchVideo;
