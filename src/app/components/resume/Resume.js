import React, { Component } from 'react';
import "./Resume.css";

class Resume extends Component {
  render() {
    return (
      <div class='fullscreenDiv'>
        <div class="container">
          <div className="center-container">
            <div className="main-container">
              <div className="image-container">
                <img className="image" src="https://drive.google.com/uc?export=view&id=18KetxqVM4bnM0NLU7aUZP-FGaQdgzv_c" />
              </div>
              <div className="details-container">
                <div>
                  <h1 className="hello">
                    Hello <span>👋</span>
                  </h1>
                </div>
                <div>
                  <h2 className="name">
                    I'm Eswaraiah Sapram
                  </h2>
                </div>
                <div>
                  <h2 className="self-details">
                    Software Engineer and Full Stack Developer in Bangalore, Karnataka, India
                  </h2>
                </div>
                <div className="button-container">
                  <a className="button-link" href="https://drive.google.com/file/d/1ckxdUsWb5yDJt93MI1zkXh8R9UMlWMTG/view?usp=sharing" target="_blank">
                    <button className="button">
                      Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="footer-container">
              <div>
                <h4>some text</h4>
              </div>
            </div> */}
            <div>
            {/* Greets */}
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;