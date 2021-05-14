
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
    
	/* Authorize a user to be able to see other features -- login/register */

	static async getAuthorization(formData, url) {
		let res = await this.request(`auth/${url}`, formData, "post");
		CinemaHubApi.token = res.token;
		return res.token;
	}

}

export default CinemaHubApi;
