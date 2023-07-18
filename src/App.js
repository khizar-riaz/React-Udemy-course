import './App.css';
import HelloClass from './component/HelloClass';
import HelloFunction from './component/Hellofunction';
import HelloFunctionES6 from './component/HellofunctionES6';
import Propsfunction from './component/propsfunction';
function App() {
  return (
    <div className="App">
 <h2>Hello App component</h2>
<HelloFunction/>

<HelloClass/>
<HelloFunctionES6/>
<Propsfunction firstName = "khizar" lastName = "riaz" age = "24"></Propsfunction>
<Propsfunction firstName = "asad" lastName = "khan" age = "34"></Propsfunction>

    </div>
  );
}

export default App;
