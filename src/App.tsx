import './styles/global.css';

import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeContext } from './contexts/theme';
import { Dashboard } from './pages/Dashboard';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Subject } from './pages/Subject'; 
import { Trail } from './pages/Trail';


export function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trail" element={<Trail />} />
          <Route path="/subject" element={<Subject />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
