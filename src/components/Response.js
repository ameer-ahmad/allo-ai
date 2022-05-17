import React from 'react'

function Response({response}) {
    console.log(response)
  return (
    <div>
        <h3>Prompt:</h3>
        <p>{response.prompt}</p>
        <h3>Response:</h3>
        <p>{response.response}</p>
    </div>
  )
}

export default Response