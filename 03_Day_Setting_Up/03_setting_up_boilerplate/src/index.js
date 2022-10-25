// index.js
import React from 'react'
import ReactDOM from 'react-dom'

import userImage from './images/asabeneh.jpg';
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

// exercise_3 solutions 
const subscribe = <h2 className='sub-text'>SUBSCRIBE</h2>;
const text = <p>
  Sign up with your email address to receive news and updates.
</p>

const subscribeButton = <input type='button' value={`Subscribe`}  className='input sub-btn' />
const inputs = (
  <form>
    <input placeholder='First name' className='input' type='text'/>
    <input placeholder='Last name' className='input' type='text'/>
    <input placeholder='Email' className='input' type='email'/>

    <div>{subscribeButton}</div>
  </form>
)

const Exercise3 = (
  <main className='exercise-3'>
    {subscribe}
    {text}
    {inputs}
  </main>
)

// Developer Card 

const userAvatar = <img className='user-image' src={userImage} width="20%" alt='asabeneh'></img>

const userDetails = (
  <div className='user-details'>
    <h4 className='user-name'>ASABENEH YETAYEH &#x2713;</h4>
    <h5 className='user-intro'>Senior Developer, Finland.</h5>
  </div>
)

const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'Numpy', 'Pandas', 'Data Analysis', 'MySQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'];

const userSkills = (
  <main className='user-skills'>
    <h4>SKILLS</h4>
    
    <section>
      {skills.map(skill => <p className='skill'>{skill}</p>)}
    </section>
  </main>
)

const dateJoined = <h5 className='join-date'><span role='img' aria-label="A clock">🕤</span> Joined on Aug 30, 2020</h5>

const userCard = (
  <main className='user-card'>
    {userAvatar}
    {userDetails}
    {userSkills}
    {dateJoined}
  </main>
)
// Application root      
const app = (
  <div className='app'>
    {Exercise2}
    {Exercise3}
    {userCard}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
