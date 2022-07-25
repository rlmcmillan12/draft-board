import React, { useRef, useState } from 'react'

function Chromecast() {
  var applicationID = '2DD3B141'
  var namespace = 'urn:x-cast:com.boombatower.chromecast-dashboard'
  var session = useRef()
  const chrome = window.chrome
  const [isCasting, setIsCasting] = useState(false)

  if (!chrome.cast || !chrome.cast.isAvailable) {
    setTimeout(initializeCastApi, 1000)
  }

  function initializeCastApi() {
    var sessionRequest = new chrome.cast.SessionRequest(applicationID)
    var apiConfig = new chrome.cast.ApiConfig(sessionRequest, sessionListener, receiverListener)

    chrome.cast.initialize(apiConfig, onInitSuccess, onError)
  }

  function onInitSuccess() {
    console.log('onInitSuccess')
  }

  function onError(message) {
    console.log('onError: ' + JSON.stringify(message))
  }

  function onSuccess(message) {
    console.log('onSuccess: ' + JSON.stringify(message))

    if (message['type'] == 'load') {
      setIsCasting(true)
    }
  }

  function onStopAppSuccess() {
    console.log('onStopAppSuccess')

    setIsCasting(false)
  }

  function sessionListener(e) {
    console.log('New session ID: ' + e.sessionId)
    session = e
    session.addUpdateListener(sessionUpdateListener)
  }

  function sessionUpdateListener(isAlive) {
    console.log((isAlive ? 'Session Updated' : 'Session Removed') + ': ' + session.sessionId)
    if (!isAlive) {
      session = null
    }
  }

  function receiverListener(e) {
    // Due to API changes just ignore this.
  }

  function sendMessage(message) {
    if (session.current != null) {
      session.current.sendMessage(namespace, message, onSuccess.bind(this, message), onError)
    } else {
      chrome.cast.requestSession(function (e) {
        session.current = e
        sessionListener(e)
        session.current.sendMessage(namespace, message, onSuccess.bind(this, message), onError)
      }, onError)
    }
  }

  function stopApp() {
    session.stop(onStopAppSuccess, onError)
  }

  function connect() {
    console.log('connect()')
    sendMessage({
      type: 'load',
      url: 'https://github.com/boombatower/chromecast-dashboard/blob/gh-pages/sender/main.js',
      refresh: '60',
    })
  }

  //TODO stopApp on click handle

  return (
    <div>
      {isCasting === false && <button onClick={connect}>Start</button>}
      {isCasting === true && <button onClick={stopApp}>Stop</button>}
    </div>
  )
}

export default Chromecast
