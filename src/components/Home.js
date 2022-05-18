import React from 'react'
import Responses from './Responses'
import Footer from './Footer';
import Header from './Header';

function Home() {
    /*
    useEffect(() => {
        const data = window.localStorage.getItem('RESPONSES');
        if (data !== null) setResponses(JSON.parse(data));
    }, [])

    useEffect(() => {
        if (responses?.length) {
            window.localStorage.setItem('RESPONSES', JSON.stringify(responses));
        }
    }, [responses])
    */

  return (
        <div className="app">
            <Header/>
            <Responses/>
            <Footer />
        </div>
  )
}

export default Home