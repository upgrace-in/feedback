import './App.css';
import './Popup.css';
import TopHead from './components/TopHead';
import Navbar from './components/Navbar';
import Chain from './components/Chain';
import Feedback from './components/Feedback';
import Claim from './components/Claim';
import Popup from './components/Popup';
import {useState} from 'react'

function App() {

  const [closeDiv, setCloseDiv] = useState(1)

  return (
    <div className="App">
      <div id="overlay" className={closeDiv == 1 ? "hide" : ""}></div>
      <div id="Popup" className='container mx-auto text-center'>
        <Popup closeVal={closeDiv} clickEvent={setCloseDiv} />
      </div>
      <Navbar />
      <div className="greyCon container">
        <div className='stylesCOn'>
          <TopHead />
          <Chain />
        </div>
      </div>
      <div className="greyCon container">
        <div className='stylesCOn text-center mx-auto'>
          <Feedback clickEvent={setCloseDiv} />
        </div>
      </div>
      <div className="greyCon container">
        <div className='stylesCOn'>
          <Claim />
        </div>
      </div>
    </div>
  );
}

export default App;
