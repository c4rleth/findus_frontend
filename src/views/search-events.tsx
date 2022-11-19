import React, { useState, useEffect, ClassType } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import { MapContainer } from 'react-leaflet/MapContainer'
//import { TileLayer } from 'react-leaflet/TileLayer'
//import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup, useMap, TileLayer, MapContainer } from 'react-leaflet'
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'

import { Helmet } from 'react-helmet'

import './search-events.css'
import './event-details.css'
//import teslaData from './tesla-sites.json'
import EventDetails from './event-details'
import eventsData from './eventsDetails.json'
import axios from 'axios'
import Eventos from '../interfaces/ievents'



const SearchEvents = () => {
  //const filteredCity = eventsData.filter(data => data.city === "Vila Velha");
  const navigate = useNavigate();
  const [showDetailsState, setShowDetailsState] = useState(true);
  const [showAllDetails, setShowAllDetails] = useState<Eventos>();
  const [closeDetails, setCloseDetails] = useState(true);
  const [description, setDescription] = useState(false);

  const [finderState, setFinderState] = useState(true);
  const [filter, setFilter] = useState('');
  const [events, setEvents] = useState<Eventos[]>([]);
  const [showFinder, setShowFinder] = useState(true);
  // const [events, setEvents] = useState([
  //   {
  //     "id": 1,
  //     "name": "estreia de vingadores",
  //     "description": "pessoal, to querendo assistir a estreia de vingadores mas ngm que eu conheço vai poder ir... quem tiver interesse é só clicar em participar que dps a gente combina o horario da sessão que dê pra todo mundo ir",
  //     "day": "25/04/2019",
  //     "hour": "12:30",
  //     "creatorId": 1,
  //     "address": {
  //       "id": 1,
  //       "state": "Espirito Santo",
  //       "city": "Vila Velha",
  //       "district": "Divino Espírito Santo",
  //       "street": "Av. Luciano das Neves",
  //       "number": 2418,
  //       "zipcode": 29107022,
  //       "complement": "string",
  //       "latitude": -20.351322,
  //       "longitude": -40.298375
  //     }
  //   }
  // ]);

  

  useEffect(() => {
    async function getEvents() { 
      const response = await axios({
        method: 'get',
        url: 'https://findus-tcc.herokuapp.com/event',
      }) 
        console.log(response.data.payload)
        setEvents(response.data.payload)
        console.log(events)

    } 
    getEvents()
    console.log(typeof eventsData)
        
  }, [])


  const showDetails = () => {
    //event.preventDefault()
    const buttonsScrollbar = document.getElementById('ButtonsScrollbar')
    const buttonGoBack = document.getElementById('ButtonGoBack')
    const loona = document.getElementById('all-details')
    const searchPlace = document.getElementById('cu')

    setShowDetailsState(!showDetailsState)
    console.log(loona)

    if (showDetailsState && buttonsScrollbar && buttonGoBack && loona && searchPlace) {
      buttonsScrollbar.style.display = "none"
      buttonGoBack.style.display = "none"
      loona.style.display = "flex"
      setShowFinder(false)
      setDescription(true)

    } else if (buttonsScrollbar && buttonGoBack && loona) {
      buttonsScrollbar.style.display = "flex"
      buttonGoBack.style.display = "flex"
      loona.style.display = "none"
      setShowFinder(true)
      setDescription(false)
    }
  }

  // const showFinder = () => {
  //   const buttonFinder = document.getElementById('button-finder')
  //   const buttonGoBack = document.getElementById('ButtonGoBack')
  //   //const buttonConfig = document.getElementById('Button-config')
  //   const teste = document.getElementById('cu')

  //   // Fecha o finder se clicar fora do input
  //   document.addEventListener("mousedown", (event) => {
  //     if (buttonFinder && buttonGoBack) {
  //       if (buttonFinder.contains(event.target)) {
  //         //console.log("Clicked Inside");
  //       } else {
  //         //console.log("Clicked Outside / Elsewhere");
  //         buttonFinder.style.display = "none"
  //         buttonGoBack.style.display = "flex"
  //         //buttonConfig.style.display = "flex"
  //       }
  //     }
  //   });

  //   setFinderState(!finderState)

  //   if (finderState) {
  //     // buttonFinder.style.display = "flex"
  //     teste.style.display = "flex"
  //     buttonGoBack.style.display = "none"
  //     //buttonConfig.style.display = "none"

  //   } else {
  //     // buttonFinder.style.display = "none"
  //     teste.style.display = "none"
  //     buttonGoBack.style.display = "flex"
  //     //buttonConfig.style.display = "flex"
  //   }
  // }


  // make new leaflet element
  const Search = (props: any) => {
    const map = useMap() // access to leaflet map
    const { provider } = props

    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider,
            showMarker: false, // Desabilita o marker
            searchLabel: 'Procurar lugar', // Placeholder           
        })

        map.addControl(searchControl) // this is how you add a control in vanilla leaflet
        return () => map.removeControl(searchControl);
    }, [props])

    return null // don't want anything to show up from this comp
  }

  

  return (
    <div className="search-events-container">
      <Helmet>
        <title>Search Events</title>
        <meta
          property="og:title"
          content="SearchEvents - Active Silver Baboon"
        />
      </Helmet>
      {/* aqui começa o mapa */}
      <div className="search-events-i-phone8plus-search-events">
        
        <MapContainer center={[-20.336840, -40.291931]} zoom={10} scrollWheelZoom={true} zoomControl={false} attributionControl={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {events.map(data => 
              <Marker key={data.id} position={[data.address.latitude, data.address.longitude]}>
                <div onClick={() => {setShowAllDetails(data)}}>
                  <Popup position={[data.address.latitude, data.address.longitude]}>
                    <div className="search-events-cardinfo">
                      <span className="search-events-text">{data.name}</span>
                      <br></br>
                      <span className="search-events-text04">{"Data: " + data.day}</span>
                      <br></br>
                      <span>{"Criador(a): " + data.creatorName}</span>
                      <br></br>
                      <span className="search-events-text02" onClick={showDetails}>Ler mais</span>
                    </div>
                  </Popup>
                </div>
              </Marker>  
              //console.log(data)            
          )}
          { showFinder &&
           <div id="cu" className='leaflet-bar'>
            <Search provider={new OpenStreetMapProvider()} />
          </div>
          }
                   
        </MapContainer>

        
        <div id="all-details" className='event-all-details'>
          <span className="event-details-text02">
            <span>Ler mais</span>
          </span>
          <div className="event-details-buttonback">
            <button onClick={showDetails}>
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
            </button>
          </div>
          <div className="event-details-info">
            <div className="event-details-info02">
              <span className="event-details-text04">
                <span className="event-details-text05">
                  {"Dia do evento: "}
                </span>
                <span className="event-details-text06">
                  {showAllDetails?.day}
                  <br></br>
                </span>
                <span className="event-details-text10">
                  {"Horário do evento: "}
                </span>
                <span className="event-details-text06">
                  {showAllDetails?.hour ? showAllDetails?.hour : "não definido"}
                  <br></br>
                </span>
              </span>
              <span className="event-details-text12">
                <span className="event-details-text13">
                  {"Endereço: "}
                </span>
                <span className="event-details-text06">
                  {showAllDetails?.address.street + ", " + 
                  showAllDetails?.address.number + ' - ' + 
                  showAllDetails?.address.district + ', ' + 
                  showAllDetails?.address.city + ' - ' + 
                  showAllDetails?.address.state + ', ' + 
                  showAllDetails?.address.zipcode }
                </span>
              </span>
              <span className="event-details-text15">
                <span className="event-details-text16">
                  {"Participantes: "}
                </span>
                <span className="event-details-text06">
                  {showAllDetails?.participantsCount + " pessoas"}
                  <br></br>
                </span>
              </span>
            </div>
            <div className="event-details-info01">
              <span className="event-details-text18">
                <span>{showAllDetails?.name}</span>
              </span>
              <span className="event-details-text20">
                <span className="event-details-text21">
                  {"Criado por " + showAllDetails?.creatorName}
                </span>
              </span>
              <span className="event-details-text23">
                <span>
                  <span>Descrição:</span>
                  <br></br>
                  <br></br>
                  <span>
                    {showAllDetails?.description}
                  </span>
                </span>
              </span>
              <span className="event-details-text34">
                <span>{"tags: " + showAllDetails?.tags}</span>
              </span>
            </div>
            <div className="event-details-buttonparticipar">
              <span className="event-details-text">
                <span>Participar</span>
              </span>
            </div>

          </div>
        </div>

        <div id='ButtonsScrollbar' className="search-events-scrollbar">
          {/* <div className="search-events-buttonfind">
            <span className="search-events-text15">
              <span onClick={showFinder}>Procurar</span>
            </span>
            <img
              alt="Vector3315"
              src="/playground_assets/vector3315-jhe7.svg"
              className="search-events-vector"
            />
          </div> */}
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
        {/* <div id='Button-config' className="search-events-buttonconfig">
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
        </div> */}
        <div id="ButtonGoBack" className="search-events-buttonback">
          <button onClick={() => navigate(-1)}>
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
          </button>
        </div>
        <div id='button-finder' className='finder'>
          <input className='input-finder' type="text" placeholder="Procurar lugar" 
          onChange={(e) => setFilter(e.target.value)}
          style={{marginTop:'1.2rem', padding:'10px'}}/>
        </div>

      </div>
    </div>
  )
}

export default SearchEvents
