import { Routes, Route } from 'react-router-dom';
import { routes as authRoutes } from '@features/auth';

function App() {
  return (
    <Routes>
      {[...authRoutes].map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}

export default App
