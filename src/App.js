import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { MemoryGamePage } from './pages/MemoryGamePage';
import { MathQuizPage } from './pages/MathQuizPage';
import { StoriesPage } from './pages/StoriesPage';
import { NurseryRhymesPage } from './pages/NurseryRhymesPage';
import { ShopPage } from './pages/ShopPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/memory" element={<MemoryGamePage />} />
        <Route path="/math" element={<MathQuizPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/rhymes" element={<NurseryRhymesPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
