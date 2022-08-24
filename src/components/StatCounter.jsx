import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const StatCounter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="stats">
        <div>
          <span className="counter" data-target="3">
            {counterOn && <CountUp start={0} end={3} duration={2} delay={0} />}
          </span>
          <h4>Total Launches</h4>
        </div>
        <div>
          <span className="counter" data-target="7">
            {counterOn && <CountUp start={0} end={7} duration={2} delay={0} />}
          </span>
          <h4>Total Landings</h4>
        </div>
        <div>
          <span className="counter" data-target="4">
            {" "}
            {counterOn && <CountUp start={0} end={4} duration={2} delay={0} />}
          </span>
          <h4>Total Reflights</h4>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default StatCounter;
