import React from 'react'
import Response from './Response'

function Responses({responses}) {
  return (
    <div>
        <h2 className="responsesHeader">Responses</h2>
        {responses.map((response, pos) => (
            <Response response={response} key={pos} />
        ))}
    </div>
  )
}

export default Responses