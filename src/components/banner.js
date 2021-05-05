import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Solving problem with code is</span>
            </div>
            <div className='line'>
              <span>what I do.</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='/knowme'>
              know me more <RightArrow />
            </a>                            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
