
import '../assets/styles/App.css';
import Intro from '../components/Intro.jsx'
import ListCharacter from '../components/ListCharacter';
import Layaout from './Layaout';

function App() {
  return (
    <div className='App'>
      <div className='containerMain'>
        <Layaout>
          <Intro/>
          <ListCharacter/>
        </Layaout>
          
      </div>
      
    </div>
  )
}

export default App
