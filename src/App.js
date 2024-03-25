import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from './components/Top/Top';
import QuickStart from './components/QuickStart/QuickStart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/quick_start" element={<QuickStart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
