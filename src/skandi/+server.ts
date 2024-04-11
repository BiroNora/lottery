import { db } from '$lib/database'

export async function POST({ request }) {
	const requestBody = await request.text()
	const formData = JSON.parse(requestBody)
	const {
    first,
    second,
    third,
    fourth,
    fifth,
    sixth
  } = formData
  console.log(first, second, third, fourth, fifth, sixth)
  try {
    const lotteryData = await db.$queryRaw`
      SELECT * FROM six
      WHERE s_first IN (${first})
        AND s_second IN (${second})
        AND s_third IN (${third})
        AND s_fourth IN (${fourth})
        AND s_fifth IN (${fifth})
        AND s_sixth IN (${sixth})
    `
    await db.$disconnect()
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
    }

    const responseStatus = 200

    // Create a Response object and return it
    const response = new Response(responseBody, {
      status: responseStatus,
      headers: responseHeaders
    })
    console.log(response)
    return response
  } catch (error) {
    console.error('Error:', error)

    // Return an error response
    const errorResponse = new Response(JSON.stringify({ error: 'An error occurred' }), {
      status: 500, // Internal Server Error
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return errorResponse
  }
}

export type RequestPayload = {
	first: number
	second: number
	third: number
	fourth: number
	fifth: number
  sixth: number
  seventh: number
}
