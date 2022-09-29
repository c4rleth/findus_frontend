import React from 'react'

import { Helmet } from 'react-helmet'

import './select-profile-type.css'

const SelectProfileType = (props) => {
  return (
    <div className="select-profile-type-container">
      <Helmet>
        <title>SelectProfileType - Active Silver Baboon</title>
        <meta
          property="og:title"
          content="SelectProfileType - Active Silver Baboon"
        />
      </Helmet>
      <div className="select-profile-type-i-phone8plus-signuptypeaccount">
        <span className="select-profile-type-text">
          <span>Selecione seu perfil</span>
        </span>
        <div className="select-profile-type-buttonback">
          <span className="select-profile-type-text02">
            <span>Voltar</span>
          </span>
          <img
            alt="Vector2741"
            src="/playground_assets/vector2741-f7qh.svg"
            className="select-profile-type-vector"
          />
        </div>
        <div className="select-profile-type-button-normal-profile">
          <span className="select-profile-type-text04">
            <span>Normal</span>
          </span>
          <span className="select-profile-type-text06">
            <span>
              Crie e gerencie eventos e se conecte com pessoas novas.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <div className="select-profile-type-button-enterprise-profile">
          <span className="select-profile-type-text08">
            <span>Empresa</span>
          </span>
          <span className="select-profile-type-text10">
            <span>
              Crie, gerencie e tenha dados estatísticos sobre o alcance de seus
              eventos.
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SelectProfileType
