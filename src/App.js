// import logo from './logo.svg';
import './App.css';
import MainPage from './containers/mainPage/mainPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
