// import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import BestGame from './components/BestGame';
import NavigationBar from './components/NavigationBar';
import TrendingGame from './components/TrendingGame';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/landingPage.css";


function App() {
  return (
    <div>
      <div className='myBG'>
      <NavigationBar/>
      <Intro/>
      </div>
      <div className='trending'>
      <TrendingGame/>
      </div>
      <div className='best'>
      <BestGame/>
      </div>
    </div>
  );
}

export default App;
