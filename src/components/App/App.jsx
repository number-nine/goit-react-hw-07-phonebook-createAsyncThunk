import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';

export default function App() {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
        />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
