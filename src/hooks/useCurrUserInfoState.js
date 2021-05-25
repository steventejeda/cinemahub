/* Fetching and refreshing current user's data*/
import { useEffect, useRef } from "react";
import CinemaApi from "../api";
import useObject from "./useObject";

const useCurrUserInfoState = (username, token) => {
	const [userInfo, setUserInfo] = useObject("userInfo", {});
	const isFirstRun = useRef(true);

	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false; //i'm using useRef to not run this code on the first run
			return;
		}
		username &&
			token &&
			CinemaApi.getUserInfo(username, token).then((response) => {
				setUserInfo(() => ({
					userName: response.user.userName,
					
				}));
			});
	}, [username, token, setUserInfo]);

	return [userInfo, setUserInfo];
};

export default useCurrUserInfoState;
