import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            
          <img
              src="https://lh3.googleusercontent.com/pw/ACtC-3fqi5dJLIjjB3nX19LePu2TWGtM_EZN2r8TU5tVYqeoMGkroXH138oLEinwB2rzEyRY-wqZHdB3TqpYYOKffIOGQ6IWCU3qBh9V48w3BlLu_kJr9IPSCOE2zCQQj-0FnnYZwFzokYxJdM4E8u5CyX04mg=w521-h694-no?authuser=0"
              alt="avatar"
              className="avatar-img"
              
              />

            <div className="banner-text">
              <h1>Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | Postgres</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/roni-serra-009a9751/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/falluk" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
