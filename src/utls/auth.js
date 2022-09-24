import axios from 'axios'

const config = {
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'fca42487f142f89a8b9b62180d24c00f'
  }
}
export const movieApi = axios.create(config)

export const fetchToken = async () => {
  try {
    const { data } = await movieApi.get('/authentication/token/new')
    const token = data.request_token
    if (data.success) {
      localStorage.setItem('request_token', token)
      location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${location.origin}/approved`
    } else {
      throw new Error('Sorry, we could not get the token')
    }
  } catch (ex) {
    console.error(ex)
  }
}

export const createSessionId = async () => {
  const token = localStorage.getItem('request_token')
  if (token) {
    try {
      const { data: { session_id } } = await movieApi.post('/authentication/session/new', { request_token: token })
      localStorage.setItem('session_id', session_id)
      return session_id
    } catch (ex) {
      console.error(ex)
    }
  }
}
