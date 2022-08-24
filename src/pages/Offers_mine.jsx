import React from 'react';
import { useState, useEffect, useRef } from 'react'

function Offers() {

  /*const scrollPage = (event) => {
    console.log('A key was pressed', event.type);
  }; */
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }

const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('span.counter');
console.log(counters,"counterscounters")
let scrollStarted = false;

//var inputs = document.querySelectorAll('span.counter');
//console.log(inputs,"inputsinputsinputs")

 function shit() {
  var inputs = document.querySelectorAll('span.counter');
  for (var i = 0; i < inputs.length; i++) {
    console.log(inputs[i],"nnnnnnnolllpeeee");
  }
}



  React.useEffect(() => {
    window.addEventListener('scroll', scrollPage);
    shit()

    // cleanup this component/page/urn:hbo:page:GW0-YlAAxOZFDwgEAAAHy:type:feature
    return () => {
      window.removeEventListener('scroll', scrollPage);
    };
  }, []);
  
  //let scrollStarted = false;

  function scrollPage() {
    const scrollPos = window.scrollY;
  
    if (scrollPos > 100 && !scrollStarted) {
      countUp();
      scrollStarted = true;
      console.log("it is true")
    } else if (scrollPos < 100 && scrollStarted) {
      reset();
      scrollStarted = false;
      console.log("it is false")
    }
  }

  function countUp() {
    console.log(counters,"counters in func")
    counters.forEach((counter) => {
      counter.innerText = '0';
  
      const updateCounter = () => {
        // Get count target
        const target = +counter.getAttribute('data-target');
        console.log(target,"targettarget")
        // Get current counter value
        const c = +counter.innerText;
  
        // Create an increment
        const increment = target / 100;
  
        // If counter is less than target, add increment
        if (c < target) {
          // Round up and set counter value
          counter.innerText = `${Math.ceil(c + increment)}`;
  
          setTimeout(updateCounter, 75);
        } else {
          counter.innerText = 0;
        }
      };
  
      updateCounter();
    });
  }
  
  function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
  }


    return (
      <>
        <section className="section-animate bg-falcon-9"></section>
        <div className="section-inner-center">
          <h3>Falcon 9</h3>
          <p>First orbital class rocket capable of reflight</p>
        </div>

        <div className="stats">
          <div>
          <span className="counter" data-target="3">0</span>
          <h4>Total Launches</h4>
          </div>
          <div>
            <span className="counter" data-target="7">0</span>
            <h4>Total Landings</h4>
          </div>
          <div>
            <span className="counter" data-target="4">0</span>
            <h4>Total Reflights</h4>
        </div>
        </div>

            <div>
            <input
            type="text"
            ref={textInput} />
            </div>
      </>
    )
  }
  
  export default Offers