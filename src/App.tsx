import './App.css';
import './'
import Home from './pages/home';

import Model2 from './pages/learning/changeColor/model2';
import Experience from './pages/learning/changeColor/Experience';
import { CustomizationProvider } from './chair-model';
import Manster from './manster';
import WheelChance from './pages/learning/wheelChance';


function App() {
  return (
    <>
    <CustomizationProvider>
      <div className="App">
        <div className="App-header">
          <Home />
        </div>
        <div className='model'>
    <WheelChance/>
    </div>
        <div className='model'>
          <Experience />
        </div>
        <div className='model'>
          <Manster />
        </div>

      </div>

    </CustomizationProvider>
  
    </>

  );
}

export default App;
