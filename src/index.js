import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Profile from './views/profile'
import Chat from './views/chat'
import EventAnalysis from './views/event-analysis'
import ChatList from './views/chat-list'
import EventManager from './views/event-manager'
import Feed from './views/feed'
import EventDetails from './views/event-details'
import SearchEvents from './views/search-events'
import SelectProfileType from './views/select-profile-type'
import LoginRegister from './views/login-register'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Profile/>} exact path="/profile" />
        <Route element={<Chat/>} exact path="/chat" />
        <Route element={<EventAnalysis/>} exact path="/event-analysis" />
        <Route element={<ChatList/>} exact path="/chat-list" />
        <Route element={<EventManager/>} exact path="/event-manager" />
        <Route element={<Feed/>} exact path="/feed" />
        <Route element={<EventDetails/>} exact path="/event-details" />
        <Route element={<SearchEvents/>} exact path="/search-events" />
        <Route
          element={<SelectProfileType/>}
          exact
          path="/select-profile-type"
        />
        <Route element={<LoginRegister/>} exact path="/login-register" />
      </Routes>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
