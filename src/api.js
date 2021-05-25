import axios from "axios";

const BASE_URL = "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class CinemaHubApi {
	// the token for interactive with the API will be stored here.
	static token;

	static async request(endpoint, data = {}, method = "get") {
		console.debug("API Call:", endpoint, data, method);

		const url = `${BASE_URL}/${endpoint}`;
		const headers = { Authorization: `Bearer ${CinemaHubApi.token}` };
		let params;
		switch (method) {
			case "get":
			case "post":
			case "patch":
			case "delete":
				params = data;
				break;
			default:
				params = {};
		}
		try {
			return (await axios({ url, method, data, params, headers })).data;
		} catch (err) {
			console.error("API Error:", err.response);
			let message = err.response.data.error.message;
			throw Array.isArray(message) ? message : [message];
		}
	}

	/* Authorize a user to be able to see other features -- login/register */

	static async getAuthorization(formData, url) {
		let res = await this.request(`auth/${url}`, formData, "post");
		CinemaHubApi.token = res.token;
		return res.token;
	}

		/* Get information on a particular user */

		static async getUserInfo(username, token) {
			CinemaApi.token = token;
			let res = await this.request(`users/${username}`);
			return res;
		}


}

export default CinemaHubApi;
