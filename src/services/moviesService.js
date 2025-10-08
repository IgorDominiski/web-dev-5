import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ghibliapi.vercel.app',
  timeout: 10000,
  headers: {
    // Força o navegador a não reutilizar conteúdo em cache para evitar 304
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
  },
  validateStatus: (status) => status >= 200 && status < 400,
})

export async function fetchMovies() {
  try {
    const { data, status } = await api.get('/films', {
      // Parâmetro anti-cache para evitar 304 Not Modified do CDN
      params: { _ts: Date.now() },
      headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
    })
    if (status === 304) {
      console.warn('[moviesService] Received 304 Not Modified — retrying without cache')
    }
    console.log('[moviesService] /films response size:', Array.isArray(data) ? data.length : typeof data)
    const normalized = Array.isArray(data)
      ? data.map((f) => ({
          id: f.id,
          title: f.title,
          description: f.description,
          director: f.director,
          producer: f.producer,
          release_date: f.release_date,
          running_time: f.running_time,
          rt_score: f.rt_score,
          image: f.image || null,
          movie_banner: f.movie_banner || null,
        }))
      : []
    console.log('[moviesService] normalized size:', normalized.length)
    return normalized
  } catch (err) {
    console.error('[moviesService] fetchMovies error:', err?.message || err)
    throw err
  }
}


