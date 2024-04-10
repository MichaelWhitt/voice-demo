import { useState } from 'react'

const VoiceInput = () => {
  const [transcript, setTranscript] = useState('')
  const [isListening, setIsListening] = useState(false)

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition() // for Safari
    // const recognition = new window.SpeechRecognition() // for other browsers
    setIsListening(true)
    recognition.lang = 'en-US' // set language
    recognition.onresult = event => {
      const transcript = event.results[0][0].transcript
      setTranscript(transcript)
    }
    recognition.onend = () => {
      // Optionally, you can perform actions when recognition stops
      setIsListening(false)
    }
    recognition.start()
  }

  return (
    <div>
      <button onClick={startListening}>
        {isListening ? 'Listening...' : 'Start Listening'}
      </button>
      <p>{transcript}</p>
    </div>
  )
}

export default VoiceInput
