import React, {useEffect} from 'react';
import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      console.log("Telegram WebApp initialized.");
    } else {
      console.error("Telegram WebApp is not available.");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer /> 
    </>
  )
}

export default App;
