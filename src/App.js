import React from 'react'
import Nav from './components/Nav';
import Pages from './components/Pages';
import { GlobalStyles } from './components/styles/GlobalStyle';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Pages />
    </div>
  );
}

export default App;
