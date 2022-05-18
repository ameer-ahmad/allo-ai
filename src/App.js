import './App.css';
import Home from './components/Home';
import {ResponseProvider} from './ResponseContext';

function App() {
  return (
    <ResponseProvider>
      <Home />
    </ResponseProvider>
    
  );
}

export default App;
