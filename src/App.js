import './App.css';
// import NavBar from './components/NavBar';
import Toolbar from './components/Toolbar/Toolbar';
import Routes from './redux/containers/Routes';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main style={{ marginTop: '64px' }}>
        <p>This is the page content</p>
        <Routes />
      </main>
    </div>
  );
}

export default App;
