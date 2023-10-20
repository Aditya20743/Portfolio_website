import React from 'react'
import './Footer.css'

import leetcode from '../assets/leetcode.png'

export default function Fotter() {
  return (
    <div className="sd">
      <h2>
        <a href="mailto: khadekaraditya20743@gmail.com">
          {' '}
          Email:khadekaraditya20743@gmail.com
        </a>
      </h2>
      <a href="https://github.com/Aditya20743">
        <img
          className="m-2"
          src="https://cdn.cdnlogo.com/logos/g/31/github.svg"
          alt="git"
          width="35"
          height="35"
        />
      </a>
      <a href="https://www.linkedin.com/in/aditya-khadekar-a583b7203/">
        <img
          className="m-2"
          src="https://cdn.cdnlogo.com/logos/l/37/linkedin.svg"
          alt="Linkedin"
          width="auto"
          height="80"
        />
      </a>
      {/* <a href="https://twitter.com/">
        <img
          className="m-2"
          src="https://cdn.cdnlogo.com/logos/t/96/twitter-icon.svg"
          alt="twitter"
          width="35"
          height="35"
        />
      </a> */}

      <a href="https://leetcode.com/AdamsNeverBackDown/">
        <img className="m-2" src={leetcode} alt="git" width="35" height="35" />
      </a>
    </div>
  )
}
