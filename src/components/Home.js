import React from 'react'
import Responses from './Responses'
import Footer from './Footer';
import Header from './Header';

function Home() {
  return (
        <div className="app">
            <Header/>
            <Responses/>
            <Footer />
        </div>
  )
}

export default Home