import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import { SingIn } from './pages/SingIn/';
import { SingUp } from './pages/SingUp';
// Context
import { AuthProvider } from './Auth/AuthContext';
// Routes
import { PrivateRoute } from './Auth/PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Route exact path="/" component={SingIn} />
        <Route exact path="/redirect" component={SingUp} />
        <PrivateRoute exact path="/home" component={Home} />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
