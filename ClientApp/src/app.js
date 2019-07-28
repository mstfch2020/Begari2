import React, { useEffect } from 'react';
import MainRoute from './route/main-route'
import Layout from './components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'bootstrap/dist/js/bootstrap.min.js'

export default function App(props) {
  
  return (

    <Layout>
      <MainRoute />
    </Layout>

  )
}
