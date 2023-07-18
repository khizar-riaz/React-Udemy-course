import './App.css';
import HelloClass from './component/HelloClass';
import HelloFunction from './component/Hellofunction';

function App() {
  return (
    <div className="App">
 <h2>Hello App component</h2>
<HelloFunction/>
<HelloClass/>
    </div>
  );
}

export default App;
