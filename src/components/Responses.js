import React, {useContext} from 'react'
import Response from './Response'
import ResponseContext from '../ResponseContext';

function Responses() {
    const {responses} = useContext(ResponseContext);

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