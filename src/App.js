import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store'; // Import the store
import Login from './screens/UserForm';
import MoviesPage from './screens/Movies';
import NetworkError from './Components/Network';

const App = () => {
  const [name, setName] = useState('');

  return (
    <Provider store={store}> {/* Wrap your app with Provider */}
      <Router>
        <Routes>
          <Route path="/" element={<Login name={name} setName={setName} />} />
          <Route path="/movies" element={<MoviesPage name={name} setName={setName} />} />
          <Route path="/noNetwork" element={<NetworkError />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
