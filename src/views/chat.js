import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './chat.css'

const Chat = (props) => {
  return (
    <div className="chat-container">
      <Helmet>
        <title>Chat - Active Silver Baboon</title>
        <meta property="og:title" content="Chat - Active Silver Baboon" />
      </Helmet>
      <div className="chat-i-phone8plus-chat">
        <div className="chat-inputchat">
          <img
            alt="mic5928"
            src="/playground_assets/mic5928-64rm.svg"
            className="chat-mic"
          />
          <input
            type="text"
            placeholder="digite uma mensagem..."
            className="chat-textinput input"
          />
          <img
            alt="Line45926"
            src="/playground_assets/line45926-cgklc.svg"
            className="chat-line4"
          />
          <img
            alt="image5928"
            src="/playground_assets/image5928-yfl38.svg"
            className="chat-image"
          />
          <img
            alt="smile5929"
            src="/playground_assets/smile5929-5e8c.svg"
            className="chat-smile"
          />
        </div>
        <img
          alt="Ellipse165930"
          src="/playground_assets/ellipse165930-ndwr-200h.png"
          className="chat-ellipse16"
        />
        <img
          alt="Ellipse175930"
          src="/playground_assets/ellipse175930-j4k9-200h.png"
          className="chat-ellipse17"
        />
        <img
          alt="Rectangle285930"
          src="/playground_assets/rectangle285930-vzw9-200h.png"
          className="chat-rectangle28"
        />
        <img
          alt="Rectangle295930"
          src="/playground_assets/rectangle295930-7tze-200h.png"
          className="chat-rectangle29"
        />
        <span className="chat-text">
          <span className="chat-text01">chega logo dia 25</span>
          <span> 🤧</span>
        </span>
        <span className="chat-text03">
          <span>22:50</span>
        </span>
        <span className="chat-text05">
          <span>22:45</span>
        </span>
        <span className="chat-text07">
          <span>Larissa</span>
        </span>
        <span className="chat-text09">
          <span>mds to muito ansiosa</span>
        </span>
        <div className="chat-header">
          <Link to="/chat-list" className="chat-navlink">
            <div className="chat-buttonback">
              <img
                alt="arrowleft5926"
                src="/playground_assets/arrowleft5926-olrc.svg"
                className="chat-arrowleft"
              />
            </div>
          </Link>
          <span className="chat-text11">
            <span>Estreia de Vingadores 🎥</span>
          </span>
          <div className="chat-buttonconfig">
            <img
              alt="morehorizontal5930"
              src="/playground_assets/morehorizontal5930-xq3o.svg"
              className="chat-morehorizontal"
            />
          </div>
          <span className="chat-text13">
            <span>7 participantes</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Chat
