import React from 'react'
import ReactDOM from 'react-dom'

// Exercise 2 
// Helper functions 
function isEven(n) {
  return n % 2 === 0;
}


const isPrime = (n) => {
  if (n <= 3) return n > 1;
  else if (n % 2 === 0 || n % 3 === 0) return false;
  else if (n < 25) return true;
  let i = 5;
  while (i * i <= n ) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

const Box = ({ color, content }) => {
  return (
    <div style={{ backgroundColor: color }} className='box'>
      <h4 style={{fontSize: '2em'}}>{ content }</h4>
    </div>
  )
}

const NumberBoxes = ( { boxCount }) => {
  const numberArr = new Array(boxCount).fill(0);

  return (
    <main>
      <h3 className='component-title'>Number Generator</h3>;

      <div className='number-boxes'>
        {numberArr.map((_, index) => {
            return (
              isPrime(index) ? 
                <Box color = "#fd5e53" content={index} key={index}/> : 
                isEven(index)? 
                  <Box color = "#21bf73" content={index} key={index}/> : 
                  <Box color = "#fddb3a" content={index} key={index}/> 
            )
          })
        }
      </div>
    </main>
  )
}
// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <h1 className='title'>30 Days of React</h1>
      <NumberBoxes boxCount={32} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
