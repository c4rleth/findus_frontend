import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './feed.css'

const Feed = (props) => {
  return (
    <div className="feed-container">
      <Helmet>
        <title>Feed - Active Silver Baboon</title>
        <meta property="og:title" content="Feed - Active Silver Baboon" />
      </Helmet>
      <div className="feed-i-phone8plus-feed">
        <div className="feed-menu">
          <span className="feed-text">
            <span>Mais recentes</span>
          </span>
          <span className="feed-text02">
            <span>Seguindo</span>
          </span>
        </div>
        <div className="feed-carrosel">
          <img
            alt="icomoonfreefire674"
            src="/playground_assets/icomoonfreefire674-jo1t.svg"
            className="feed-icomoonfreefire"
          />
          <img
            alt="Rectangle30676"
            src="/playground_assets/rectangle30676-uuiw-200h.png"
            className="feed-rectangle30"
          />
          <img
            alt="Rectangle31678"
            src="/playground_assets/rectangle31678-f0db-200h.png"
            className="feed-rectangle31"
          />
          <img
            alt="Rectangle326710"
            src="/playground_assets/rectangle326710-jmxg-200h.png"
            className="feed-rectangle32"
          />
          <img
            alt="Rectangle336712"
            src="/playground_assets/rectangle336712-v4kd-200h.png"
            className="feed-rectangle33"
          />
          <span className="feed-text04">
            <span>#kpop</span>
          </span>
          <span className="feed-text06">
            <span>#friends</span>
          </span>
          <span className="feed-text08">
            <span>#dog</span>
          </span>
          <span className="feed-text10">
            <span>#tbt</span>
          </span>
        </div>
        <div className="feed-post1 list-item">
          <img
            alt="Ellipse183106"
            src="/playground_assets/ellipse183106-wv4y-200h.png"
            className="feed-ellipse18"
          />
          <span className="feed-text12">
            <span>Nay</span>
          </span>
          <span className="feed-text14">
            <span>8 horas atrás</span>
          </span>
          <img
            alt="Rectangle343106"
            src="/playground_assets/rectangle343106-q3zp-300h.png"
            className="feed-rectangle34"
          />
          <span className="feed-text16">
            <span>de ontem...</span>
          </span>
          <img
            alt="heart3106"
            src="/playground_assets/heart3106-to6j.svg"
            className="feed-heart"
          />
          <img
            alt="messagesquare3106"
            src="/playground_assets/messagesquare3106-zszv.svg"
            className="feed-messagesquare"
          />
          <span className="feed-text18">
            <span>17</span>
          </span>
          <span className="feed-text20">8</span>
          <img
            alt="Line43107"
            src="/playground_assets/line43107-gldo.svg"
            className="feed-line4"
          />
        </div>
        <div className="feed-post2 list-item">
          <img
            alt="Rectangle353107"
            src="/playground_assets/rectangle353107-177-300h.png"
            className="feed-rectangle35"
          />
          <img
            alt="Ellipse193107"
            src="/playground_assets/ellipse193107-6gj-200h.png"
            className="feed-ellipse19"
          />
          <span className="feed-text21">
            <span>Raell</span>
          </span>
          <span className="feed-text23">
            <span>1 dias atrás</span>
          </span>
          <span className="feed-text25">
            <span className="feed-text26">
              <span>Gostei muito de conhecer vcs!</span>
              <br></br>
              <span></span>
            </span>
            <span>
              #geek
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="feed-text31">
            <span>17</span>
          </span>
          <span className="feed-text33">8</span>
          <img
            alt="Line53108"
            src="/playground_assets/line53108-fsnp.svg"
            className="feed-line5"
          />
        </div>
        <Navbar
          user_src="/playground_assets/user5917-7zw4.svg"
          rootClassName="navbar-root-class-name3"
          tablerjumprope_src="/playground_assets/tablerjumprope6518-7syn.svg"
        ></Navbar>
      </div>
    </div>
  )
}

export default Feed
