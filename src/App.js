import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AssistiveTech from './AssistiveTech';
import LearnASL from './LearnASL';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <header>
        <Navbar/>
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
