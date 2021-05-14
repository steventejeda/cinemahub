/* Routes Component */

import UserLoginForm from "./components/UserLoginForm";
import UserRegisterForm from "./components/UserRegisterForm";
import Home from "./components/Home"
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
	space: {
		marginTop: "8rem",
		marginBottom: "4rem",
	},
	center: {
		marginTop: "30vh",
		marginBottom: "4rem",
		color: "#0000FF",
	},
}));

const Routes = () => {
	const classes = useStyles();
	return (
		<>
			<Switch>
				<Route exact path="/login">
					<h1 className={classes.space}>Login</h1>
					<UserLoginForm />
				</Route>
				<Route exact path="/register">
					<h1 className={classes.space}>Sign Up</h1>
					<UserRegisterForm />
				</Route>
				<Route exact path="/">
                    <Home />
				</Route>
			</Switch>
		</>
	);
};

export default Routes;
