import Layout from './components/Layout/Layout';
import Sidebar from './components/Layout/Sidebar';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Layout/>
        </Router>
    </div>
  );
}

export default App;
