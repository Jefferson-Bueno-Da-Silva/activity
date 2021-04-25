import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export const PrivateRoute = ({ component: RouteComponent, ...other }) => {
  const { usuario } = useContext(AuthContext);

  return(
    
    <Route
      // checa as propriedades
      {...other}
      render= {(routeProps) =>
        !!usuario ? (
          // Renderiza o componente privado
          <RouteComponent {...routeProps} />
        ) : (
          // Manda de volta para o root;
          <Redirect to="/" />
        )
      }
    />

  );
}