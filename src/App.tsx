import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from "./components/Layout";

const App = (): JSX.Element => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={"/location"}>
            <>location</>
          </Route>
          <Route exact path={"/favourite"}>
            <>favorite</>
          </Route>
          <Route exact path={"/"}>
            <>location</>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
