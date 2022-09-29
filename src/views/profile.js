import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Active Silver Baboon</title>
        <meta property="og:title" content="Profile - Active Silver Baboon" />
      </Helmet>
      <div className="profile-i-phone8plus-profile">
        <img
          alt="bxscertification5642"
          src="/playground_assets/bxscertification5642-m0hc.svg"
          className="profile-bxscertification"
        />
        <img
          src="/playground_assets/rectangle175639-ons-500w.png"
          alt="image"
          className="profile-image"
        />
        <img
          alt="Ellipse105638"
          src="/playground_assets/ellipse105638-3ho-200h.png"
          className="profile-ellipse10"
        />
        <span className="profile-text">
          <span>Bruno Alves</span>
        </span>
        <span className="profile-text02">
          <span>@bruno.alves33</span>
        </span>
        <div className="profile-button-edit">
          <img
            alt="Ellipse135710"
            src="/playground_assets/ellipse135710-whcj-200h.png"
            className="profile-ellipse13"
          />
          <img
            alt="edit5710"
            src="/playground_assets/edit5710-cplm.svg"
            className="profile-edit"
          />
        </div>
        <span className="profile-text04">
          <span>só queria alguem pra ir no cinema cmg 😭</span>
        </span>
        <div className="profile-info-profile">
          <span className="profile-text06">
            <span>
              <span>52</span>
              <br></br>
              <span>Seguindo</span>
            </span>
          </span>
          <span className="profile-text11">
            <span>
              <span>1</span>
              <br></br>
              <span>Publicações</span>
            </span>
          </span>
          <span className="profile-text16">
            <span>
              <span>50</span>
              <br></br>
              <span>Seguidores</span>
            </span>
          </span>
        </div>
        <div className="profile-post">
          <img
            alt="Line35711"
            src="/playground_assets/line35711-65de.svg"
            className="profile-line3"
          />
          <img
            alt="Line45712"
            src="/playground_assets/line45712-nhjs.svg"
            className="profile-line4"
          />
          <span className="profile-text21">
            <span>21 horas atrás</span>
          </span>
          <span className="profile-text23">
            <span>
              boa noite pessoal 👻
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <img
            alt="heart5711"
            src="/playground_assets/heart5711-eq9.svg"
            className="profile-heart"
          />
          <img
            alt="messagesquare5712"
            src="/playground_assets/messagesquare5712-co6.svg"
            className="profile-messagesquare"
          />
          <span className="profile-text25">5</span>
          <span className="profile-text26">5</span>
        </div>
        <div className="profile-button-config">
          <img
            alt="Ellipse141145"
            src="/playground_assets/ellipse141145-ci2g-200h.png"
            className="profile-ellipse14"
          />
          <img
            alt="settings1142"
            src="/playground_assets/settings1142-hmev.svg"
            className="profile-settings"
          />
        </div>
        <div className="profile-button-add">
          <img
            alt="Ellipse151353"
            src="/playground_assets/ellipse151353-micc-200h.png"
            className="profile-ellipse15"
          />
          <img
            alt="plussquare1364"
            src="/playground_assets/plussquare1364-q9p.svg"
            className="profile-plussquare"
          />
        </div>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
      </div>
    </div>
  )
}

export default Profile
