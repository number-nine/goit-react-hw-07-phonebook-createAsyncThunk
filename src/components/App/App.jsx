import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import * as contactsAPI from 'redux/contactOperations';
import { selectAuth } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(selectAuth);

   useEffect(() => {
     dispatch(contactsAPI.getAllContacts());
   }, [dispatch]);

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
