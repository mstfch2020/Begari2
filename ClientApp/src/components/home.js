import React from 'react';
import { connect } from 'react-redux';
import Login from './login/login';


const Home = props => (
  <div>
    <Login />

  </div>
);

export default connect()(Home);
