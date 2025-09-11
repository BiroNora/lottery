import { db } from '$lib/database';

export async function POST({ request }) {
	const requestBody = await request.text();
	const formData = JSON.parse(requestBody);
	const { first, second, third, fourth, fifth, sixth, seventh } = formData;
	//console.log(first, second, third, fourth, fifth, sixth, seventh);
	
	const numbers = [first, second, third, fourth, fifth, sixth, seventh].sort((a, b) => a - b);
	const [m_first, m_second, m_third, m_fourth, m_fifth, m_sixth, m_seventh] = numbers;
	
	try {
		// Első lekérdezés: Keressük az 'm' oszlopokban
		let lotteryData = await db.skandi.findMany({
			where: {
				m_first,
				m_second,
				m_third,
				m_fourth,
				m_fifth,
				m_sixth,
				m_seventh
			}
		});

		if (lotteryData.length === 0) {
			lotteryData = await db.skandi.findMany({
				where: {
					h_first: m_first, // Az 'm' változókat használjuk a 'h' oszlopok lekérdezéséhez
					h_second: m_second,
					h_third: m_third,
					h_fourth: m_fourth,
					h_fifth: m_fifth,
					h_sixth: m_sixth,
					h_seventh: m_seventh
				}
			});
		}
		
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
