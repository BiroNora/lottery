import { db } from '$lib/database';

export async function POST({ request }) {
	const requestBody = await request.text();
	const formData = JSON.parse(requestBody);
	const { first, second, third, fourth, fifth, sixth, seventh } = formData;
	console.log(first, second, third, fourth, fifth, sixth, seventh);
	try {
		const lotteryData = await db.$queryRaw`
      SELECT * FROM skandi
      WHERE m_first IN (${first})
        AND m_second IN (${second})
        AND m_third IN (${third})
        AND m_fourth IN (${fourth})
        AND m_fifth IN (${fifth})
        AND m_sixth IN (${sixth})
        AND m_seventh IN (${seventh})
        OR h_first IN (${first})
        AND h_second IN (${second})
        AND h_third IN (${third})
        AND h_fourth IN (${fourth})
        AND h_fifth IN (${fifth})
        AND h_sixth IN (${sixth})
        AND h_seventh IN (${seventh})
    `;
		await db.$disconnect();
		// Create a JSON response object
		const stringifyBigInts = (key, value) => {
			if (typeof value === 'bigint') {
				return value.toString();
			}
			return value;
		};
		const responseBody = JSON.stringify({ lotteryData }, stringifyBigInts);
		const responseHeaders = {
			'Content-Type': 'application/json'
		};

		const responseStatus = 200;

		// Create a Response object and return it
		const response = new Response(responseBody, {
			status: responseStatus,
			headers: responseHeaders
		});
		console.log(response);
		return response;
	} catch (error) {
		console.error('Error:', error);

		// Return an error response
		const errorResponse = new Response(JSON.stringify({ error: 'An error occurred' }), {
			status: 500, // Internal Server Error
			headers: {
				'Content-Type': 'application/json'
			}
		});

		return errorResponse;
	}
}

export type RequestPayload = {
	first: number;
	second: number;
	third: number;
	fourth: number;
	fifth: number;
	sixth: number;
	seventh: number;
};
