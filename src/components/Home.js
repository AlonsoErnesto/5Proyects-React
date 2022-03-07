import React from 'react';

import Dashboard from './Dashboard';

import { Row, Col } from 'antd';

const Home = () => {
  return (
    <Dashboard>
      <Row justify='center' className="home">
        <Col lg={10} sm={24}>
            <img src="assets/Pasta-amico.svg" alt="" height="400"/>
        </Col>
        <Col lg={24} sm={24}>
            <h3 style={{color:'tomato'}}>Hi, this is a <span>Food Store</span>, where the food is fantastic.</h3>
            <p>My restaurant has ubication fron Arequipa, Yura. with more food's and drikings .</p>
        </Col>
      </Row>
    </Dashboard>
  )
}

export default Home;
