import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './event-details.css'

const EventDetails = (props) => {
  return (
    <div className="event-details-container">
      <Helmet>
        <title>EventDetails - Active Silver Baboon</title>
        <meta
          property="og:title"
          content="EventDetails - Active Silver Baboon"
        />
      </Helmet>
      <div className="event-details-i-phone8plus-event-details">
        <div className="event-details-buttonparticipar">
          <span className="event-details-text">
            <span>Participar</span>
          </span>
        </div>
        <span className="event-details-text02">
          <span>Ler mais</span>
        </span>
        <Link to="/search-events" className="event-details-navlink">
          <div className="event-details-buttonback">
            <img
              alt="Rectangle114578"
              src="/playground_assets/rectangle114578-12cg.svg"
              className="event-details-rectangle11"
            />
            <img
              alt="Vector4580"
              src="/playground_assets/vector4580-1s3.svg"
              className="event-details-vector"
            />
          </div>
        </Link>
        <div className="event-details-info">
          <div className="event-details-info02">
            <span className="event-details-text04">
              <span className="event-details-text05">
                Dia do evento:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="event-details-text06">
                <span>25/04/2019</span>
                <br></br>
                <span></span>
              </span>
              <span className="event-details-text10">
                Horário do evento:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>não definido</span>
            </span>
            <span className="event-details-text12">
              <span className="event-details-text13">
                Endereço:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                Av. Luciano das Neves, 2418 - Divino Espírito Santo, Vila Velha
                - ES, 29107-022
              </span>
            </span>
            <span className="event-details-text15">
              <span className="event-details-text16">
                Participantes:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>7 pessoas</span>
            </span>
          </div>
          <div className="event-details-info01">
            <span className="event-details-text18">
              <span>Estreia de Vingadores 🎥</span>
            </span>
            <span className="event-details-text20">
              <span className="event-details-text21">
                Criado por
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>bruno.alves33</span>
            </span>
            <span className="event-details-text23">
              <span>
                <span>Descrição:</span>
                <br></br>
                <span></span>
                <br></br>
                <span>pessoal, to querendo assistir a estreia de</span>
                <br></br>
                <span>vingadores mas ngm que eu conheço vai</span>
                <br></br>
                <span>
                  poder ir... quem tiver interesse é só clicar em participar que
                  dps a gente combina o horario da sessão que dê pra todo mundo
                  ir
                </span>
              </span>
            </span>
            <span className="event-details-text34">
              <span>tags: filme, cinema, shopping</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetails
