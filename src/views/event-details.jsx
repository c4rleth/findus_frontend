import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import eventsData from './eventsDetails.json'

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
        {eventsData.map(data => (
            <><div className="event-details-buttonparticipar">
            <span className="event-details-text">
              <span>Participar</span>
            </span>
          </div><span className="event-details-text02">
              <span>Ler mais</span>
            </span><Link to="/search-events" className="event-details-navlink">
              <div className="event-details-buttonback">
                <img
                  alt="Rectangle114578"
                  src="/playground_assets/rectangle114578-12cg.svg"
                  className="event-details-rectangle11" />
                <img
                  alt="Vector4580"
                  src="/playground_assets/vector4580-1s3.svg"
                  className="event-details-vector" />
              </div>
            </Link><div className="event-details-info">
              <div className="event-details-info02">
                <span className="event-details-text04">
                  <span className="event-details-text05">
                    {"Dia do evento: "}
                  </span>
                  <span className="event-details-text06">
                    {data.eventDate}
                    <br></br>
                  </span>
                  <span className="event-details-text10">
                    {"Horário do evento: "}
                  </span>
                  <span className="event-details-text06">
                    {data.eventHour}
                    <br></br>
                  </span>
                </span>
                <span className="event-details-text12">
                  <span className="event-details-text13">
                    {"Endereço: "}                    
                  </span>
                  <span className="event-details-text06">
                    {data.address}
                  </span>
                </span>
                <span className="event-details-text15">
                  <span className="event-details-text16">
                    {"Participantes: "}
                  </span>
                  <span className="event-details-text06">
                    {data.participantsNumber + " pessoas"}
                    <br></br>
                  </span>
                </span>
              </div>
              <div className="event-details-info01">
                <span className="event-details-text18">
                  <span>{data.name}</span>
                </span>
                <span className="event-details-text20">
                  <span className="event-details-text21">
                    {"Criado por " + data.creator}                    
                  </span>
                </span>
                <span className="event-details-text23">
                  <span>
                    <span>Descrição:</span>
                    <br></br>
                    <br></br>
                    <span>
                      {data.description}
                    </span>
                  </span>
                </span>
                <span className="event-details-text34">
                  <span>{"tags: " + data.tags}</span>
                </span>
              </div>
            </div></>
        ))}
      
        
      </div>
    </div>
  )
}

export default EventDetails
