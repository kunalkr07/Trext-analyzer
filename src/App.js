import Navbar from './components/Navbar'
import From from './components/From'

import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <From heading="Enter your text to analyze"/>
    </div>
    
    </>
  );
}

export default App;
