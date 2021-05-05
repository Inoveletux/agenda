import logo from './logoPerso.svg';
import './App.css';
import Agenda from './components/Agenda.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <>
          <Agenda/>
        </>
      </header>
    </div>
  );
}

export default App;
