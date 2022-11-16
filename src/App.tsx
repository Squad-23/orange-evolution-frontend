import './styles/global.css';

import classNames from 'classnames';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeContext } from './contexts/theme';
import { TrailContextProvider } from './contexts/trails';
import { UserContextProvider } from './contexts/user';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Subject } from './pages/Subject';
import { Trail } from './pages/Trail';

export function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classNames(theme, 'h-full')}>
      <BrowserRouter>
        <UserContextProvider>
          <TrailContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/trail/:idTrail">
                <Route path="/trail/:idTrail" element={<Trail />} />
                <Route path="/trail/:idTrail/module/:idModule">
                  <Route path="/trail/:idTrail/module/:idModule/subject/:indexSubject" element={<Subject />} />
                </Route>
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </TrailContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}
