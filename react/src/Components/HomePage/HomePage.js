import React from 'react';
import NavBar from './NavBar';
import SideBar from '../SideBar';

import '../App.css';

const HomePage = () => (
  <div className="homepage-wrapper">
    <NavBar />
    <SideBar page="home" />
    <h1 className="homepage-heading">
this is the home page
    </h1>
  </div>
);

export default HomePage;
