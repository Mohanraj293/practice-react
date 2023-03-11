import "./App.css";
import Counter from "./Components/Counter";
import { Greet } from "./Components/Greet"
import Message from "./Components/Message";
import Welcome from './Components/Welcome'


function App() {
  return (
    <div className="App">
      {/* funtional component */}
      <Greet name="Mohan" /> 
      {/* Class Component */}
      <Welcome name="Kalpana" />
      <Message />

      <Counter />
    </div>
  );
}

export default App;
