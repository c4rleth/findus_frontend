import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './chat-list.css'

const ChatList = (props) => {
  return (
    <div className="chat-list-container">
      <Helmet>
        <title>ChatList - Active Silver Baboon</title>
        <meta property="og:title" content="ChatList - Active Silver Baboon" />
      </Helmet>
      <div className="chat-list-i-phone8plus-list-chat">
        <Navbar
          user_src="/playground_assets/user5917-7zw4.svg"
          rootClassName="navbar-root-class-name2"
          messagecircle_src="/playground_assets/messagecircle5918-mzx.svg"
        ></Navbar>
        <input
          type="text"
          placeholder="Procurar"
          className="chat-list-textinput input"
        />
        <img
          alt="search5924"
          src="/playground_assets/search5924-0wgo.svg"
          className="chat-list-search"
        />
        <span className="chat-list-text">
          <span>Chat</span>
        </span>
        <div className="chat-list-inputsearch">
          <span className="chat-list-text02">
            <span>Procurar</span>
          </span>
        </div>
        <div className="chat-list-chat2">
          <span className="chat-list-text04">
            <span>07/04/2019</span>
          </span>
          <span className="chat-list-text06">
            <span>
              Espírito Geek
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <img
            alt="Ellipse155925"
            src="/playground_assets/ellipse155925-8tqc-200h.png"
            className="chat-list-ellipse15"
          />
          <span className="chat-list-text08">
            <span>Você: devo aparecer lá pela tarde...</span>
          </span>
        </div>
        <div className="chat-list-chat3">
          <span className="chat-list-text10">
            <span>17/03/2019</span>
          </span>
          <span className="chat-list-text12">
            <span>Bar Clubeeeeee</span>
          </span>
          <img
            alt="Ellipse161089"
            src="/playground_assets/ellipse161089-u7gx-200h.png"
            className="chat-list-ellipse16"
          />
          <span className="chat-list-text14">
            <span>Evento encerrado</span>
          </span>
        </div>
        <Link to="/chat" className="chat-list-navlink">
          <div className="chat-list-chat1">
            <span className="chat-list-text16">
              <span>22:45</span>
            </span>
            <span className="chat-list-text18">
              <span>Estreia de Vingadores 🎥</span>
            </span>
            <img
              alt="Ellipse145923"
              src="/playground_assets/ellipse145923-1gar-200h.png"
              className="chat-list-ellipse14"
            />
            <span className="chat-list-text20">
              <span>Larissa: mds to muito ansiosa</span>
            </span>
            <img
              alt="Rectangle255924"
              src="/playground_assets/rectangle255924-g052-200h.png"
              className="chat-list-rectangle25"
            />
            <span className="chat-list-text22">5</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ChatList
