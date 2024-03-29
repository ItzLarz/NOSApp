// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import Cors from "cors";

const cors = Cors({
	methods: ["POST", "GET", "HEAD"],
	origin: "*",
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
	req: NextApiRequest,
	res: NextApiResponse,
	fn: Function
) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result: any) => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<String>
) {
	await runMiddleware(req, res, cors);

	fetch(`https://feeds.nos.nl/nosnieuwsalgemeen`)
		.then((response) => response.text())
		.then((data) => res.status(200).send(data));
}
