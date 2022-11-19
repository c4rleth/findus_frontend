import React from 'react'
//import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'
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
import ErrorPage from './views/ErrorPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/profile" element={<Profile/>}  />
        <Route element={<Chat/>} path="/chat" />
        <Route element={<EventAnalysis/>} path="/event-analysis" />
        <Route element={<ChatList/>} path="/chat-list" />
        <Route element={<EventManager/>} path="/event-manager" />
        <Route element={<Feed/>} path="/feed" />
        <Route element={<EventDetails/>} path="/event-details" />
        <Route element={<SearchEvents/>} path="/search-events" />
        <Route element={<SelectProfileType/>} path="/select-profile-type" />
        <Route element={<LoginRegister/>} path="/login-register" />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </Router>
  )
}

// ReactDOM.render(<App />, document.getElementById('app'))

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);

root.render(<App />);


