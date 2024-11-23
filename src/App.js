import React from 'react';
import './app.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();

    // Example: Setting up a custom button in Telegram
    tg.MainButton.setText("Click Me!");
    tg.MainButton.show();
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
