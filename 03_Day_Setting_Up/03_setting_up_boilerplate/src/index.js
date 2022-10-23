// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg';
import reactLogo from './images/react_logo.png';

// add my date
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var date = new Date();

// For custom format use
const _date = date.toLocaleDateString("en-US", { day: 'numeric' })+ "-" + date.toLocaleDateString("en-US", { month: 'short' })+ "-" + date.toLocaleDateString("en-US", { year: 'numeric' })

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting started with React'
const subtitle = 'React is a JavaScript Library'
const student = {
  firstName: 'Hamza',
  lastName: 'Mateen',  
}


// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Student: {student.firstName} {student.lastName}
      </p>
      <small>Date: {_date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 2003
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {student.firstName} {student.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

const user = (
  <div>
    <img src={reactLogo} alt='React Logo ' width={"20%"}/>
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisites to get started with {' '}
        <strong>
          <em>React</em>
        </strong>
        :
      </p>
      <ul>
        {techsFormatted}
      </ul>
      
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

const copyRight = <p>Copyright &copy; {date.getFullYear()}</p>

// JSX element, footer
const footer = (
  <footer style={{outline: "2px solid black "}}>
    <div className='footer-wrapper'>
      {copyRight}
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
