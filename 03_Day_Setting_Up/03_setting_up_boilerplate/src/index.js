// index.js
import React from 'react'
import ReactDOM from 'react-dom'

// Exercise Level 2 Solutions 
// importing logos
import reactLogo from './images/react_logo.png';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import jsLogo from './images/js_logo.png';


const title = <h3 className='frontend-tech'>Frontend Technologies</h3>
const logos = (
  <div className='logos'>
    <img className='logo' alt="" src={reactLogo}  width="15%" />
    <img className='logo' alt="" src={cssLogo} width="15%" />
    <img className='logo' alt="" src={htmlLogo} width="15%" />
    <img className='logo' alt="" src={jsLogo} width="15%" />
  </div>
)
const Exercise2 = (
  <main className='exercise-2'>
    {title}
    {logos}
  </main>
)
// Application root      
const app = (
  <div className='app'>
    {Exercise2}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
