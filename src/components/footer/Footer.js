import React from 'react'
import './style.css';
export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="content">
        <p className='social-info'>Find me on my social media handles.</p>
     
        <span className="socilas">
        <i class="fa fa-github" aria-hidden="true"><a href="https://github.com/sir-ojay" target="_blank" rel="noopener" >github</a></i>
          <i className="fa fa-twitter-square"><a href="https://twitter.com/ibrahimsannu" target="_blank" rel="noopener">Twitter</a></i>
          <i className="fa fa-linkedin-square"><a href="https://www.linkedin.com/in/ibrahim-ojeabu-sannu-b5bb70149/" target="_blank" rel="noopener">LinkedIn</a></i>
        </span>
        <p className='poweredby'>Powered by Ojay</p>
      </footer>

    </div>
  )
}
