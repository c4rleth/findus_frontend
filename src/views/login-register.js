import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login-register.css'

const LoginRegister = (props) => {
  return (
    <div className="login-register-container">
      <Helmet>
        <title>LoginRegister - Active Silver Baboon</title>
        <meta
          property="og:title"
          content="LoginRegister - Active Silver Baboon"
        />
      </Helmet>
      <div className="login-register-i-phone8plus-login-signup">
        <input
          type="text"
          placeholder="Email"
          className="login-register-input-email input"
        />
        <input
          type="text"
          placeholder="Senha"
          className="login-register-input-senha input"
        />
        <Link to="/profile" className="login-register-button-entrar button">
          Entrar
        </Link>
        <span className="login-register-text">
          <span>Esqueceu a senha?</span>
        </span>
        <span className="login-register-text02">
          <span>ou entre com</span>
        </span>
        <img
          alt="Line12614"
          src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          className="login-register-line1"
        />
        <img
          alt="Line22615"
          src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          className="login-register-line2"
        />
        <span className="login-register-text04">
          <span className="login-register-text05">
            Não tem conta ainda? Se cadastre
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="login-register-text06">aqui</span>
          <span>.</span>
        </span>
        <span className="login-register-text08">
          <span>Boas-vindas ao Find Us</span>
        </span>
        <img
          alt="Logo22924"
          src="/playground_assets/logo22924-4ufkh-200h.png"
          className="login-register-logo2"
        />
        <div className="login-register-button-facebook">
          <img
            alt="icons8facebooknovo4814594"
            src="/playground_assets/icons8facebooknovo4814594-zdzmq-200h.png"
            className="login-register-icons8facebooknovo481"
          />
        </div>
        <div className="login-register-button-google">
          <img
            alt="icons8googlelogo4814596"
            src="/playground_assets/icons8googlelogo4814596-n1rg-200h.png"
            className="login-register-icons8googlelogo481"
          />
        </div>
        <div className="login-register-button-apple">
          <img
            alt="icons8macos5014598"
            src="/playground_assets/icons8macos5014598-rn2n-200h.png"
            className="login-register-icons8macos501"
          />
        </div>
      </div>
    </div>
  )
}

export default LoginRegister
