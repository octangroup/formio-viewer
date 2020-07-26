import React from 'react';
import FormViewer from './pages/formViewer';
import WelcomePage from './pages/welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/view/:project/:form" component={FormViewer}/>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
