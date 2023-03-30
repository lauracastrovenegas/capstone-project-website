import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AssistiveTech from './AssistiveTech';
import LearnASL from './LearnASL';
import Navbar from './components/Navbar';
import React, {useState} from 'react';

const App = () => {
  const [currentSection, setSection] = useState("/");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <header>
        <Navbar setSection={setSection} currentSection={currentSection}/>
      </header>
      <main>
        <Routes>
        <Route exact path="/" element={<AssistiveTech />} />
        <Route exact path="/asl" element={<LearnASL />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
