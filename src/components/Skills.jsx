import React, { Component } from 'react';
import './Skills.scss'
import CSSLogo from '../images/icons/CSSLogo.png'
import AILogo from '../images/icons/aiLogoLg.png'
import GitLogo from '../images/icons/Git-Icon-1788C.png'
import HTMLLogo from '../images/icons/htmlLogo.png'
import JSLogo from '../images/icons/JavaScript-logo.png'
import JestLogo from '../images/icons/jestLogo.png'
import NodeJSLogo from '../images/icons/nodeJSLogo.png'
import PSLogo from '../images/icons/PhotoshopLogo.png'
import PostgresLogo from '../images/icons/postgresLogo.png'
import ReactLogo from '../images/icons/ReactLogo.png'
import SassLogo from '../images/icons/sassLogo.png'
import VSLogo from '../images/icons/VSLogo.png'


export default class About extends Component {
  render() {
    return (
      <section id="skills">
        <h2>Skills</h2>
        <div className='logos-container'>
          <div>
            <img src={JSLogo} alt="JSLogo" />
            <label htmlFor="">JavaScript</label>
          </div>

          <div>
            <img src={ReactLogo} alt="ReactLogo" />
            <label htmlFor="">React</label>
          </div>

          <div>
            <img src={PostgresLogo} alt="PostgresLogo" />
            <label htmlFor="">PostgreSql</label>
          </div>

          <div>
            <img src={HTMLLogo} alt="HTMLLogo" />
            <label htmlFor="">HTML</label>
          </div>

          <div>
            <img src={CSSLogo} alt="CSSLogo" />
            <label htmlFor="">CSS</label>
          </div>
        </div>

        <div className='logos-container'>
          <div>
            <img src={NodeJSLogo} alt="NodeJSLogo" />
            <label htmlFor="">NodeJS</label>
          </div>

          <div>
            <img src={VSLogo} alt="VsLogo" />
            <label htmlFor="">VSCode</label>
          </div>

          <div>
            <img src={GitLogo} alt="GitLogo" />
            <label htmlFor="">Git</label>
          </div>

          <div>
            <img src={PSLogo} alt="PSLogo" />
            <label htmlFor="">Photoshop</label>
          </div>

          <div>
            <img src={AILogo} alt="AILogo" />
            <label htmlFor="">Illustrator</label>
          </div>
        </div>

        <h3>And more...</h3>

      </section>
    );
  }
}