import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './event-manager.css'

const EventManager = (props) => {
  return (
    <div className="event-manager-container">
      <Helmet>
        <title>EventManager - Active Silver Baboon</title>
        <meta
          property="og:title"
          content="EventManager - Active Silver Baboon"
        />
      </Helmet>
      <div className="event-manager-i-phone8plus-createan-event">
        <div className='events-panel'>
          <div className="event-manager-meus-eventos">
            <span className="event-manager-text">
              <span>Meus eventos</span>
            </span>
            <span className="event-manager-text02">
              <span>MAIS</span>
            </span>
            <div className="event-manager-group">
              <div className="event-manager-carrosel">
                <div className="event-manager-buttonadd-evento button">
                  <img
                    alt="antdesignplusoutlined1073"
                    src="/playground_assets/antdesignplusoutlined1073-cnj.svg"
                    className="event-manager-antdesignplusoutlined"
                  />
                </div>
                <div className="event-manager-event1">
                  <span className="event-manager-text04">
                    <span>
                      <span>
                        Estreia de
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>Vingadores 🎥</span>
                    </span>
                  </span>
                  <div className="event-manager-group1">
                    <img
                      alt="Vector1073"
                      src="/playground_assets/vector1073-59ya.svg"
                      className="event-manager-vector"
                    />
                    <img
                      alt="Vector1073"
                      src="/playground_assets/vector1073-rwml.svg"
                      className="event-manager-vector01"
                    />
                  </div>
                  <span className="event-manager-text09">
                    <span>Cinemark Shopping V...</span>
                  </span>
                  <span className="event-manager-text11">
                    <span>25, Abril 2019</span>
                  </span>
                  <div className="event-manager-akariconscalendar">
                    <div className="event-manager-group2">
                      <img
                        alt="Vector1074"
                        src="/playground_assets/vector1074-qp2.svg"
                        className="event-manager-vector02"
                      />
                      <img
                        alt="Vector1074"
                        src="/playground_assets/vector1074-d1kg.svg"
                        className="event-manager-vector03"
                      />
                    </div>
                  </div>
                  <div className="event-manager-buttongo-evento button">
                    <img
                      alt="arrowup1074"
                      src="/playground_assets/arrowup1074-twr.svg"
                      className="event-manager-arrowup"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="event-manager-eventos-participando">
            <div className="event-manager-group3">
              <span className="event-manager-text13">
                <span>Espírito Geek</span>
              </span>
              <div className="event-manager-group4">
                <img
                  alt="Vector1096"
                  src="/playground_assets/vector1096-ueba.svg"
                  className="event-manager-vector04"
                />
                <img
                  alt="Vector1097"
                  src="/playground_assets/vector1097-w9l.svg"
                  className="event-manager-vector05"
                />
              </div>
              <span className="event-manager-text15">
                <span>Shopping Mestre Álv...</span>
              </span>
              <span className="event-manager-text17">
                <span>07, Abril 2019</span>
              </span>
              <div className="event-manager-akariconscalendar1">
                <div className="event-manager-group5">
                  <img
                    alt="Vector1091"
                    src="/playground_assets/vector1091-56wh.svg"
                    className="event-manager-vector06"
                  />
                  <img
                    alt="Vector1091"
                    src="/playground_assets/vector1091-sr0n.svg"
                    className="event-manager-vector07"
                  />
                </div>
              </div>
              <div className="event-manager-buttongo button">
                <img
                  alt="arrowup1091"
                  src="/playground_assets/arrowup1091-jdr9.svg"
                  className="event-manager-arrowup1"
                />
              </div>
            </div>
            <span className="event-manager-text19">
              <span>Eventos que estou participando</span>
            </span>
            <span className="event-manager-text21">
              <span>MAIS</span>
            </span>
          </div>
          <div className="event-manager-eventos-concluidos">
            <div className="event-manager-group3">
              <span className="event-manager-text23">
                <span>Bar Clubeeeeee</span>
              </span>
              <div className="event-manager-group7">
                <img
                  alt="Vector1087"
                  src="/playground_assets/vector1096-ueba.svg"
                  className="event-manager-vector04"
                />
                <img
                  alt="Vector1087"
                  src="/playground_assets/vector1087-d32.svg"
                  className="event-manager-vector05"
                />
              </div>
              <span className="event-manager-text15">
                <span>Av. Santa Leopoldina...</span>
              </span>
              <span className="event-manager-text17">
                <span>17, Mar 2019</span>
              </span>
              <div className="event-manager-akariconscalendar2">
                <div className="event-manager-group8">
                  <img
                    alt="Vector1088"
                    src="/playground_assets/vector1088-h7my.svg"
                    className="event-manager-vector10"
                  />
                  <img
                    alt="Vector1088"
                    src="/playground_assets/vector1088-04dc.svg"
                    className="event-manager-vector11"
                  />
                </div>
              </div>
              <div className="event-manager-buttongo button">
                <img
                  alt="arrowup1088"
                  src="/playground_assets/arrowup1088-ht5g.svg"
                  className="event-manager-arrowup2"
                />
              </div>
            </div>
            <span className="event-manager-text29">
              <span>Eventos concluídos</span>
            </span>
            <span className="event-manager-text31">
              <span>MAIS</span>
            </span>
          </div>
          <div className="event-manager-eventos-vacumm">

          </div>
        </div>
        <Navbar
          user_src="/playground_assets/user5917-7zw4.svg"
          rootClassName="navbar-root-class-name1"
          plussquare_src="/playground_assets/plussquare6763-1brf.svg"
        ></Navbar>
      </div>
    </div>
  )
}

export default EventManager
