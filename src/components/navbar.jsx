import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-navbar ${props.rootClassName} `}>
      <Link to="/profile" className="navbar-navlink">
        <img
          alt={props.user_alt}
          src={props.user_src}
          className="navbar-user"
        />
      </Link>
      <Link to="/chat-list" className="navbar-navlink1">
        <img
          alt={props.messagecircle_alt}
          src={props.messagecircle_src}
          className="navbar-messagecircle"
        />
      </Link>
      <Link to="/event-manager" className="navbar-navlink2">
        <img
          alt={props.plussquare_alt}
          src={props.plussquare_src}
          className="navbar-plussquare"
        />
      </Link>
      <Link to="/feed" className="navbar-navlink3">
        <img
          alt={props.tablerjumprope_alt}
          src={props.tablerjumprope_src}
          className="navbar-tablerjumprope"
        />
      </Link>
      <Link to="/search-events" className="navbar-navlink4">
        <div className="navbar-buttonsearch-event">
          <img
            alt={props.Ellipse11_alt}
            src={props.Ellipse11_src}
            className="navbar-ellipse11"
          />
          <img
            alt={props.search_alt}
            src={props.search_src}
            className="navbar-search"
          />
        </div>
      </Link>
    </div>
  )
}

Navbar.defaultProps = {
  plussquare_alt: 'plussquare5713',
  search_src: '/playground_assets/search5793-iq6p.svg',
  user_alt: 'user5790',
  rootClassName: '',
  Ellipse11_src: '/playground_assets/ellipse115768-768-200h.png',
  tablerjumprope_alt: 'tablerjumprope5815',
  search_alt: 'search5793',
  plussquare_src: '/playground_assets/plussquare5713-o8c1.svg',
  user_src: '/playground_assets/user5790-ziv.svg',
  Ellipse11_alt: 'Ellipse115768',
  tablerjumprope_src: '/playground_assets/tablerjumprope5815-fxhk.svg',
  messagecircle_alt: 'messagecircle5798',
  messagecircle_src: '/playground_assets/messagecircle5798-f8i.svg',
}

Navbar.propTypes = {
  plussquare_alt: PropTypes.string,
  search_src: PropTypes.string,
  user_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  Ellipse11_src: PropTypes.string,
  tablerjumprope_alt: PropTypes.string,
  search_alt: PropTypes.string,
  plussquare_src: PropTypes.string,
  user_src: PropTypes.string,
  Ellipse11_alt: PropTypes.string,
  tablerjumprope_src: PropTypes.string,
  messagecircle_alt: PropTypes.string,
  messagecircle_src: PropTypes.string,
}

export default Navbar
