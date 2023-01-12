import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Training from './Components/Training';




function App() {
  return (
    <div className="App">
      <Header/>
      <Home text="Derick saa"/>
      <About/>
      <Training/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
