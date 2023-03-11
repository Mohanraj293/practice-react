import "./App.css";
import ClassClick from "./Components/ClassClick";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import { Greet } from "./Components/Greet"
import Message from "./Components/Message";
import Welcome from './Components/Welcome'


function App() {
  return (
    <div className="App">
      {/* funtional component */}
      {/* <Greet name="Mohan" />  */}
      {/* Class Component */}
      {/* <Welcome name="Kalpana" />
      <Message />
      <Counter /> */}
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
