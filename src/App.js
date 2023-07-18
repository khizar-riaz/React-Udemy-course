import './App.css';
import HelloClass from './component/HelloClass';
import HelloFunction from './component/Hellofunction';
import HelloFunctionES6 from './component/HellofunctionES6';

function App() {
  return (
    <div className="App">
 <h2>Hello App component</h2>
<HelloFunction/>
<HelloClass/>
<HelloFunctionES6/>
    </div>
  );
}

export default App;
