import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={(props) => <Home {...props} />}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
