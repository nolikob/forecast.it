import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Layout from "./components/Layout";
import Location from "./pages/Location";

const App = (): JSX.Element => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={"/location"}>
            <Location />
          </Route>
          <Route exact path={"/favourite"}>
            <>favorite</>
          </Route>
          <Route exact path={"/"}>
            <Location />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
