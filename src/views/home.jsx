import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Welcome to Find Us</title>
        <meta property="og:title" content="Active Silver Baboon" />
      </Helmet>
      <div className="home-i-phone8plus-intro">
        <Link to="/login-register" className="home-button-comecar button">
          <span className="home-text">
            <span>Começar</span>
            <br></br>
            <br></br>
          </span>
        </Link>
        <span className="home-text04">
          <span>
            <span>Encontre eventos</span>
            <br></br>
            <span>e faça novas amizades</span>
          </span>
        </span>
        <span className="home-text09">
          <span>
            Crie ou participe de eventos e ache pessoas com os mesmos interesses
            que você!
          </span>
        </span>
        <img
          alt="People11043"
          src="/playground_assets/people11043-imr.svg"
          className="home-people1"
        />
      </div>
    </div>
  )
}

export default Home
