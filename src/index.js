import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Countdown from './components/Countdown';
import Form from './components/Form';
import Products from './components/Products';
import SocialMedia from './components/SocialMedia';

ReactDOM.render(
    <>
      <Header />
      <Banner />
      <Countdown />
      <Form />
      <Products/>
      <SocialMedia/>
    </>,
  document.getElementById('root')
);
