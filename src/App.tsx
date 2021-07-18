import { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Layout from "./components/Layout";
import Location from "./pages/Location";
import Favourite from "./pages/Favourite";
import AppContext from "./context";

const App = (): JSX.Element => {
	const [ favouriteKey, setFavouriteKey ] = useState<null | string>(null);

  return (
    <Router>
			<AppContext.Provider value={{ favouriteKey, setFavouriteKey }}>
				<Layout>
					<Switch>
						<Route exact path={"/location"}>
							<Location />
						</Route>
						<Route exact path={"/favourite"}>
							<Favourite />
						</Route>
						<Route exact path={"/"}>
							<Location />
						</Route>
					</Switch>
				</Layout>
			</AppContext.Provider>
    </Router>
  );
}

export default App;
