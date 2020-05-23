import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';
// import VideoFound from '../containers/VideoFound';
import Layout from '../components/Layout';

//PUEDO PASAR DE UNA AL RETURN PONIENDO LOS PARENTESIS () EN LUGAR DE LAS LLAVES Y EVITANDO ESCRIBIR EL RETURN DE ABAJO , SOLO ES UNA SUGERENCIA PARA CODIGO FUTURO.

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/player/:id' component={Player} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );

};

export default App;
