// index.js
import React from 'react'
import ReactDOM from 'react-dom'

// Exercise Level 2 Solutions 
import userImage from './images/asabeneh.jpg';

// importing logos
import reactLogo from './images/react_logo.png';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import jsLogo from './images/js_logo.png';



const HexaColor = () => {
  const generateColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

  let colorList = [];

  for (let i = 0; i < 5; i++) 
    colorList.push(generateColor());
  
  const styles = {
    height: '6rem',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    fontFamily: 'Montserrat',
    margin: '0.5rem auto',
    borderRadius: '0.65rem',
  }


  return (
    <main className='colors-list'>
      <h4>Favourite Colors</h4>
      {colorList.map((color, key) => 
      <div style={{...styles, backgroundColor: color, width: `100%`}}>
        <h2 key={key} style={{color: 'white'}}>{color}</h2>
      </div>)}
    </main>
  )
}

// Exercise 1. Done 
const DisplayLogos = () => {
  const title = <h3 className='frontend-tech'>Frontend Technologies</h3>  
  const logos = (
    <div>
      <img className='logo' alt="" src={reactLogo}  width="15%" />
      <img className='logo' alt="" src={cssLogo} width="15%" />
      <img className='logo' alt="" src={htmlLogo} width="15%" />
      <img className='logo' alt="" src={jsLogo} width="15%" />
    </div>
  )
  
  return (
    <main className='logos'>
      {title}
      {logos}
    </main>
  )
}

// exercise 2. 
const SubscriptionCard = () => {
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

  return (
    <main className='subscription-card'>
      {subscribe}
      {text}
      {inputs}
    </main>
  )
}
// Developer Card 
const UserCard = () => {
  const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'Numpy', 'Pandas', 'Data Analysis', 'MySQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'];

  return (
    <main className='user-card'>
      <img className='user-image' src={userImage} width="20%" alt='asabeneh'></img>
      
      <div className='user-details'>
        <h4 className='user-name'>ASABENEH YETAYEH &#x2713;</h4>
        <h5 className='user-intro'>Senior Developer, Finland.</h5>
      </div>
      
      <main className='user-skills'>
        <h4>Skills</h4>
        
        <section>
          {skills.map(skill => <p key={skill} className='skill'>{skill}</p>)}
        </section>
      </main>
      
      <h5 className='join-date'><span role='img' aria-label="A clock">🕤</span> Joined on Aug 30, 2020</h5>
    </main>
  )
}
// Application root      
const app = (
  <div className='app'>
    <DisplayLogos />
    <SubscriptionCard />
    <UserCard />
    <HexaColor />
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
