import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import './App.scss';

function App() {

  const [mobileView, setMobileView] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1199) {
        setMobileView(true)
      } else {
        setMobileView(false)
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="page">
      <Header mobileView={mobileView}/>
      <main className='main'>
        <Promo mobileView={mobileView}/>
      </main>
    </div>
  );
}

export default App;
