import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCog} from '@fortawesome/free-solid-svg-icons';

function Response({response}) {
  return (
    <div className="responseContainer">
        <p className="responseText responsePrompt"><span className="responseTitle">Prompt:</span> {response.prompt}</p>
        <hr/>
        <p className="responseText"><span className="responseTitle">Response:</span> {response.response}</p>
        <p className="responseEngine"><FontAwesomeIcon icon={faCog} className="responseIcon" />{response.engine}</p>
    </div>
  )
}

export default Response