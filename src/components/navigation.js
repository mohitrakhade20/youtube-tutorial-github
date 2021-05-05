import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Socials...</div>
            <ul className='nav-links'>
              <li>
                {/* <NavLink to='/case-studies' exact> */}
                  <a href="https://git.io/devmohit"> GitHub </a>
                {/* </NavLink> */}
              </li>
              <li>
                {/* <NavLink to='/approach' exact> */}
                <a href="https://devmohit.medium.com/"> Medium</a>
                {/* </NavLink> */}
              </li>
              <li>
                {/* <NavLink to='/services' exact> */}
                <a href="https://www.linkedin.com/in/mohit-rakhade/"> LinkedIn</a>

                {/* </NavLink> */}
              </li>
              <li>
                {/* <NavLink to='/about-us' exact> */}
                  <a href="https://www.youtube.com/channel/UC9TTjrGXiEJ2luE3CfcsWgg/featured"> YouTube</a>
                {/* </NavLink> */}
              </li>
              <li>
                {/* <NavLink to='/about-us' exact> */}
                  <a href="https://twitter.com/mohitrakhade20"> Twitter</a>
                {/* </NavLink> */}
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <NavLink to='/contact' exact>
                    Get in touch with me
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/audit' exact>
                    mohitrakhade20@gmail.com
                    mohit@bechho.in
                  </NavLink>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Localhost</li>
                <li>New Friends Colony</li>
                <li>Bhandara 441904</li>
                <li>Maharashtra, India</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li>+91 744 824 8283</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Legal</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
