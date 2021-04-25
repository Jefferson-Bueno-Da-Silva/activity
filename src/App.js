import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import { SingIn } from './pages/SingIn/';
// Context
import { AuthProvider } from './Auth/AuthContext';
// Routes
import { PrivateRoute } from './Auth/PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Route exact path="/" component={SingIn} />
        <PrivateRoute exact path="/home" component={Home} />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
