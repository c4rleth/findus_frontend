import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './search-events.css'

const SearchEvents = (props) => {
  return (
    <div className="search-events-container">
      <Helmet>
        <title>SearchEvents - Active Silver Baboon</title>
        <meta
          property="og:title"
          content="SearchEvents - Active Silver Baboon"
        />
      </Helmet>
      <div className="search-events-i-phone8plus-search-events">
        <div className="search-events-cardinfo">
          <img
            alt="Rectangle103314"
            src="/playground_assets/rectangle103314-68nn.svg"
            className="search-events-rectangle10"
          />
          <span className="search-events-text">
            <span>Estreia de Vingadores 🎥</span>
          </span>
          <Link to="/event-details" className="search-events-text02">
            <span>Ler mais</span>
          </Link>
          <span className="search-events-text04">
            <span className="search-events-text05">Data:</span>
            <span className="search-events-text06">
              <span> 25/04/2019</span>
              <br></br>
              <span></span>
            </span>
            <span className="search-events-text10">
              Criador(a):
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span>
                bruno.alves33
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span></span>
            </span>
          </span>
        </div>
        <img
          alt="eventcricle3314"
          src="/playground_assets/eventcricle3314-s54n-200h.png"
          className="search-events-eventcricle"
        />
        <div className="search-events-scrollbar">
          <div className="search-events-buttonfind">
            <span className="search-events-text15">
              <span>Procurar</span>
            </span>
            <img
              alt="Vector3315"
              src="/playground_assets/vector3315-jhe7.svg"
              className="search-events-vector"
            />
          </div>
          <div className="search-events-buttonfilter">
            <span className="search-events-text17">
              <span>Filtros</span>
            </span>
            <img
              alt="Vector3315"
              src="/playground_assets/vector3315-fz9o.svg"
              className="search-events-vector1"
            />
          </div>
        </div>
        <div className="search-events-buttonconfig">
          <img
            alt="Ellipse123315"
            src="/playground_assets/ellipse123315-cwsj-200h.png"
            className="search-events-ellipse12"
          />
          <img
            alt="settings3315"
            src="/playground_assets/settings3315-o98k.svg"
            className="search-events-settings"
          />
        </div>
        <div className="search-events-buttonback">
          <img
            alt="Rectangle113316"
            src="/playground_assets/rectangle113316-q5zs.svg"
            className="search-events-rectangle11"
          />
          <img
            alt="Vector3316"
            src="/playground_assets/vector3316-i106.svg"
            className="search-events-vector2"
          />
        </div>
      </div>
    </div>
  )
}

export default SearchEvents
