import Header from './Components/Header/Header';
import TinderCards from './Sections/TinderCards';
import SwipeButtons from './Sections/SwipeButtons';

import './App.css';
function App() {
  return (
    <div className="app">
       <Header/>

       <TinderCards/>
       <SwipeButtons/>

      </div>
  );
}

export default App;

