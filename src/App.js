import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AssistiveTech from './AssistiveTech';
import LearnASL from './LearnASL';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AssistiveTech />} />
        <Route exact path="/asl" element={<LearnASL />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
