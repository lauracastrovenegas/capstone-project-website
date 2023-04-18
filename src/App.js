import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AssistiveTech from './AssistiveTech';
import LearnASL from './LearnASL';
import Navbar from './components/Navbar';
import OptionsBar from './components/OptionsBar';
import React, {useState} from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

const BodyWrapper = styled.main`
  padding: 0rem 10rem;
  background-color: ${props => props.darkMode ? 'black' : 'white'};
  color: ${props => props.darkMode ? 'white' : 'black'};
`

const App = () => {
  const [currentSection, setSection] = useState("/");
  const [staticMode, setStaticMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <header>
        <OptionsBar setStaticMode={setStaticMode} setDarkMode={setDarkMode} staticMode={staticMode} darkMode={darkMode}/>
        <Navbar setSection={setSection} currentSection={currentSection} isDark={darkMode}/>
      </header>
      <BodyWrapper darkMode={darkMode}>
        <Routes>
        <Route exact path="/" element={<AssistiveTech setSection={setSection} options={{staticMode:staticMode, darkMode:darkMode}}/>} />
        <Route exact path="/asl" element={<LearnASL setSection={setSection} options={{staticMode:staticMode, darkMode:darkMode}}/>} />
      </Routes>
      </BodyWrapper>
    </BrowserRouter>
  );
}

export default App;
