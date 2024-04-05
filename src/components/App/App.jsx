import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import './App.scss';

function App() {
  return (
    <div className="page">
      <Header />
      <main className='main'>
        <Promo />
      </main>
    </div>
  );
}

export default App;
