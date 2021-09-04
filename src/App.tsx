import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./views/home/home.component";
import Header from "./components/header/header.component";
import createRootStore from "./redux/store/root.store";

function App() {
  const store = createRootStore();
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="app-container">
            <Switch>
              <Route component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
