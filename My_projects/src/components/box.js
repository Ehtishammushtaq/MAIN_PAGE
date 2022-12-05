import React from 'react';
import styles from '../components/box.module.css';
function Box(props) {
   
   
  return(
    
      <a className={styles.box} href={props.href}  target="_blank" rel="noopener noreferrer" > 
       <span>
        {props.text}
       </span>



      </a>
    
   

  );
}

export default Box;
