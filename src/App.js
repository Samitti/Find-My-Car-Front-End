import './App.css';
import NavBar from './components/NavBar';
import Routes from './redux/containers/Routes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="gameListContainer">
        <Routes />
      </div>
    </div>
  );
}

export default App;
