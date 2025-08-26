import './App.css';
import ADAM from './ADAM.png';
import TextBox from './TextBox';

function App() {
  return (
    <div className="App">
      <img src={ADAM} className="App-logo" alt="logo" />
      <TextBox text={"Hello user! I am the Advanced Developmental Automated Machine. But you can call me ADAM."} textColor={"red"}/>
      <p>Test</p>
    </div>
  );
}

export default App;
