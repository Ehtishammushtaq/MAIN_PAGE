import React from 'react';
import styles from '../components/box.module.css';
import myPicture from '../components/images/Photo.jpg'
function Profile() {
   
   
    return(
      
            <div className={styles.profile}>
               <p className={styles.text}>
                <h1> Ehtisham Mushtaq</h1>
                <hr></hr>
                <h2> Junior, Computer Science</h2>
                
                <h3>KU School of Engineering</h3>
               
                <h4>GPA: 3.8</h4>
                <h5 className={styles.textbox}>
                    I'm an student majoring in Computer Science at the University of Kansas. 
                    I'm always looking for opportunities to learn more about software development and web development. 
                    I'm also interested in cybersecurity and machine learning. My experience includes various undergraduate 
                    positions at KU and a number of personal and group software projects. While CS is genuinely interguing in its own
                    sense to me but I haven't commited to any particular branch yet. I am equally interested in cybersecurity 
                    as I am in data science, programming.  I've also started to like frontend development since our RideFind group project.
                 
                    
                    <br></br>
                    
                    <br></br>
                    <br></br>
                    <br></br>
                    Below you can find more about me, my experience, and my projects.


                </h5>
                
                </p> 
               
                <div> <img src={myPicture} alt="Logo" /></div>
            </div>
    );
  }

export default Profile;