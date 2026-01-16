import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FurnitureLanding } from './pages/FurnitureLanding';
import { ToursLanding } from './pages/ToursLanding';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FurnitureLanding />} />
        <Route path="/tours" element={<ToursLanding />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
