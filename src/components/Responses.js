import React, {useContext} from 'react'
import Response from './Response'
import ResponseContext from '../ResponseContext';

function Responses() {
    const {responses} = useContext(ResponseContext);

  return (
    <div className="responses">
        {responses.map((response, pos) => (
            <Response response={response} key={pos} />
        ))}
    </div>
  )
}

export default Responses