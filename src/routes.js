/* Routes Component */

import UserLoginForm from "./components/UserLoginForm";
import UserRegisterForm from "./components/UserRegisterForm";
import Home from "./components/Home"
import Search from "./components/Search"
import { Route, Switch} from "react-router-dom";



const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/login">
					<UserLoginForm />
				</Route>
				<Route exact path="/register">
					<UserRegisterForm />
				</Route>
				<Route exact path="/">
                    <Home />
				</Route>
				<Route exact path="/search">
                    <Search />
				</Route>
			</Switch>
		</>
	);
};

export default Routes;