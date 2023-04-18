import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AssistiveTech from './AssistiveTech';
import LearnASL from './LearnASL';
import Navbar from './components/Navbar';
import OptionsBar from './components/OptionsBar';
import React, {useState} from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.main`
  padding: 0rem 10rem;
`

const App = () => {
  const [currentSection, setSection] = useState("/");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <header>
        <OptionsBar/>
        <Navbar setSection={setSection} currentSection={currentSection}/>
      </header>
      <BodyWrapper>
        <Routes>
        <Route exact path="/" element={<AssistiveTech />} />
        <Route exact path="/asl" element={<LearnASL />} />
      </Routes>
      </BodyWrapper>
    </BrowserRouter>
  );
}

export default App;
