import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Roni A. Serra</h2>
            <img
              src="https://lh3.googleusercontent.com/pw/ACtC-3fqi5dJLIjjB3nX19LePu2TWGtM_EZN2r8TU5tVYqeoMGkroXH138oLEinwB2rzEyRY-wqZHdB3TqpYYOKffIOGQ6IWCU3qBh9V48w3BlLu_kJr9IPSCOE2zCQQj-0FnnYZwFzokYxJdM4E8u5CyX04mg=w521-h694-no?authuser=0"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Entre em contato para projetos open source ou remunerados, o meu interesse no momento é ganhar experiência.</p>

          </Cell>
          <Cell col={6}>
            <h2>Call me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (18) 99712-7354
                  </ListItemContent>
                </ListItem>

                
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    roniblizz87@gmail.com
                  </ListItemContent>
                </ListItem>

                

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
