import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import Show from './Pages/Show';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Home />}>
          
        </Route>
        <Route exact path="/starred" element={ <Starred />}>
         
        </Route>
        <Route exact path="/show/:id" element={ <Show />}>
         
        </Route>
        <Route element={ <div>404 ERROR Page</div>}>
         
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
