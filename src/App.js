import './App.css';

import Hero from './components/Hero/Hero';
import Dropdown from './components/Dropdown/Dropdown';
import AppContextProvider from './context/GlobalContext';
function App() {
  /* quote="quote" timeOfDay={timeOfDay} */
  return (
    <AppContextProvider>
      <div className='app'>
        <Hero />
        <Dropdown/>
      </div>
    </AppContextProvider>
  );
}

export default App;
