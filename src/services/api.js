
export default function api(route, data, parseResponse = true) {
  const ROUTE = route

  console.log('api services')
  console.log('route = ', route)
  console.log('ROUTE = ', ROUTE)

  const defaultParams = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    credentials: 'omit',
  }

  return fetch(ROUTE, defaultParams)
    .then(
      response => {

        const contentType = response.headers.get('content-type')

        if (!parseResponse) return

        if (response.status == 200 && contentType && contentType.indexOf('application/json') !== -1) {
          return response.json().then(json => ({ json, response }))
        } else {
          return response.json().then(data =>
            Promise.reject({
              message: 'API error',
              status: response.status,
              error: data.error
            })
          )
        }
      },
      error =>
        Promise.reject({
          message: error.message,
          status: 404
        })
    )
    .then(data => {
      if (!parseResponse) return
      const { json, response } = data

      if (!response.ok) {
        return Promise.reject({
          message: 'Response isn\'t ok',
          status: response.status
        })
      }

      if (json.status == 'fail') {
        return Promise.reject({
          message: 'JSON status is failed',
          status: response.status
        })
      }

      return json
    })
}
