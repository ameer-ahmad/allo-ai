import React, {useContext} from 'react'
import Response from './Response'
import ResponseContext from '../ResponseContext';
import ScrollToBottom from 'react-scroll-to-bottom';

function Responses() {
    const {responses} = useContext(ResponseContext);

  return (
    <div className="responses">
        <ScrollToBottom className="scrollBehavior">
        {responses.map((response, pos) => (
            <Response response={response} key={pos} />
        ))}
        </ScrollToBottom>
    </div>
  )
}

export default Responses