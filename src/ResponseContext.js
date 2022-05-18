import { createContext, useState} from 'react';

const ResponseContext = createContext();

export function ResponseProvider({children}) {
    const [responses, setResponses] = useState([]);

    return (
        <ResponseContext.Provider value={{responses, setResponses}} >
            {children}
        </ResponseContext.Provider>
    )
}

export default ResponseContext;
