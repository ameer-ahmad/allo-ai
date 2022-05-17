import React from 'react'
import Response from './Response'

function Responses({responses}) {
  return (
    <div>
        <h2>Responses</h2>
        {responses.map((response) => (
            <Response response={response} />
        ))}
    </div>
  )
}

export default Responses