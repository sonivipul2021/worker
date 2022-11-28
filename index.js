/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import template from './template'

export default {
	async fetch(request) {
		const ReqCountry = request.cf.country;
		const ClientIP = request.headers.get('CF-Connecting-IP');
		const destinationURL = "https://1.1.1.1/"
		const statusCode = 301;

		//return new Response(ReqCountry);

		if (ReqCountry == "SG")
		{
			return new Response(template(ClientIP, request.cf),{
				headers: {'content-type': 'text/html'},
			});
		}

		else
		{
			return Response.redirect(destinationURL, statusCode);
		}

	},
};
