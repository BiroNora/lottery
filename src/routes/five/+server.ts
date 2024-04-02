import { db } from '$lib/database'

export async function POST({ request }) {
	const requestBody = await request.text()
	const formData = JSON.parse(requestBody)
	const {
    first,
    second,
    third,
    fourth,
    fifth
  } = formData

  try {
    const lotteryData = await db.$queryRaw`
      SELECT * FROM five
      WHERE f_first IN (${first})
        AND f_second IN (${second})
        AND f_third IN (${third})
        AND f_fourth IN (${fourth})
        AND f_fifth IN (${fifth})
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
}
