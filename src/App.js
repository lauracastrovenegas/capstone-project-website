import { BrowserRouter } from 'react-router-dom';
import AssistiveTech from './AssistiveTech';
import AssistiveTechStatic from './AssistiveTechStatic';
import LearnASL from './LearnASL';
import Navbar from './components/Navbar';
import OptionsBar from './components/OptionsBar';
import React, { useState } from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.main`
  padding: 0rem 10rem;
  background-color: ${props => props.darkMode ? 'black' : 'white'};
  color: ${props => props.darkMode ? 'white' : 'black'};
`

const App = () => {
  const [currentSection, setSection] = useState("/");
  const [staticMode, setStaticMode] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <header>
        <OptionsBar setStaticMode={setStaticMode} setDarkMode={setDarkMode} staticMode={staticMode} darkMode={darkMode} />
        <Navbar setSection={setSection} currentSection={currentSection} isDark={darkMode} />
      </header>
      <BodyWrapper darkMode={darkMode}>
        {currentSection === '/' ?
          staticMode ? <AssistiveTechStatic setSection={setSection} isDark={darkMode} /> : <AssistiveTech setSection={setSection} isDark={darkMode} />
          : <LearnASL setSection={setSection} isDark={darkMode} />}
      </BodyWrapper>
    </BrowserRouter>
  );
}

export default App;
