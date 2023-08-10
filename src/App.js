import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet name = "abc" hero = "123"> 
        <p>this is children props</p>
      </Greet>
      <Greet name = "xyz" hero = "1234">
        <button>action</button>
      </Greet>
      <Welcome name = "abc" hero = "123" />
      <Welcome name = "abcd" hero = "1234" />
      <Hello/> */}

      <Message />
    </div>
  );
}

export default App;
