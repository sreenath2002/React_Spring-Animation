import React from "react";
import {useSpring,animated,easings} from 'react-spring'
import './App.css';
 function Springconfig() {
    const { background, rotateZ } = useSpring({
        from: {
          background: '#46e891',
          rotateZ: 0,
          opacity: 0, 
          config: {
            duration: 1000,
            easing: easings.easeInOutQuart,
          }
        },
       
        
        to: async (next) => {
          while (true) {
            await next({
              background: '#277ef4',
              rotateZ: 400,
              opacity: 1,
         
            });
            await next({
              background: '#ff6f61',
              rotateZ: 0,
              opacity: 0,
            });
          }
        },
        
        config: {
          duration: 4000,
          easing: easings.easeInOutQuart,
        },
      })
    
    
  return (
    <animated.div className="spring"
    style={{
      backgroundColor: 'd6d6d6',
      borderRadius: 17,
      boxShadow: 'rgb(0,0,0,0.44) 0px 5px 5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'center',
      color: 'black',
      fontSize:50,
      margin: 250, 
      background,
      width: 300,
      height: 200,
      rotateZ,
    }}
  >
      REACT
      
    </animated.div>
  )
}
export default Springconfig;
