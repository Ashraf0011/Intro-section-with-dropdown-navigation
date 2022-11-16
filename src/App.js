import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


import Nav from './components/Nav';
import NavBox from './components/NavBox';
import Pages from './components/Pages';
import { GlobalStyles } from './components/styles/GlobalStyle';


function App() {

  let [width, setWidth] = useState(window.innerWidth);
  // width = useRef()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resizing = () => window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  })


  useEffect(() => {
    resizing();
    console.log(width);
  }, [width])

  return (
    <div className="App">
      <GlobalStyles />
      {
        width < 1150 ? <NavBox /> : <Nav />
      }
      {/* <Nav /> */}
      <Pages />
    </div>
  );
}

export default App;
