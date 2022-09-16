import './App.css';

import Navbar from './components/navbar';

import Description from './components/description';
import Projects from './components/projects';

function App() {
  return (
    <div>
      <div className='Background'></div>
      <Navbar></Navbar>
      <div className='topContainer'>
  
      <Description></Description>
        
        <Projects></Projects> 
        
      </div>
      <div className='projectsContainer'>
      
      </div>
      
      
    </div>
  );
}

export default App;
