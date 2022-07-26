import React, { useEffect, useRef, useState } from 'react'

function Chromecast() {
  var applicationID = 'F7FD2183'
  var namespace = 'urn:x-cast:com.boombatower.chromecast-dashboard'
  var session = useRef()
  const chrome = window.chrome
  const [isCasting, setIsCasting] = useState(false)

  useEffect(() => {
    initializeCastApi()
    function initializeCastApi() {
      if (!chrome.cast || !chrome.cast.isAvailable) {
        setTimeout(initializeCastApi, 1000)
        return
      }
      var sessionRequest = new chrome.cast.SessionRequest(applicationID)
      var apiConfig = new chrome.cast.ApiConfig(sessionRequest, sessionListener, receiverListener)
      chrome.cast.initialize(apiConfig, onInitSuccess, onError)
    }
  }, [applicationID, chrome.cast, sessionListener])

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
    session.current = e
    session.current.addUpdateListener(sessionUpdateListener)
  }

  function sessionUpdateListener(isAlive) {
    console.log((isAlive ? 'Session Updated' : 'Session Removed') + ': ' + session.current.sessionId)
    if (!isAlive) {
      session.current = null
      setIsCasting(false)
    }
  }

  function receiverListener(e) {
    // Due to API changes just ignore this.
  }

  function sendMessage(message) {
    if (session.current != null) {
      console.log('exhisting session')
      session.current.sendMessage(namespace, message, onSuccess.bind(this, message), onError)
    } else {
      console.log('new session')
      chrome.cast.requestSession(function (e) {
        session.current = e
        console.log(e)
        sessionListener(e)
        session.current.sendMessage(namespace, message, onSuccess.bind(this, message), onError)
      }, onError)
    }
  }

  function stopApp() {
    session.current.stop(onStopAppSuccess, onError)
  }

  function connect() {
    console.log('connect()')
    sendMessage({
      type: 'load',
      url: 'https://draft-board-rlm.herokuapp.com/display',
      refresh: '60',
    })
  }

  return (
    <div>
      {isCasting === false && <button onClick={connect}>Start</button>}
      {isCasting === true && <button onClick={stopApp}>Stop</button>}
    </div>
  )
}

export default Chromecast
