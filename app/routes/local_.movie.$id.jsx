
export {movieView as default} from '../pages';
export {movieLoader as loader} from '../pages';

export async function clientLoader({ serverLoader, params }) {
  let cacheKey = `movie-${params.id}`
  let cache = sessionStorage.getItem(cacheKey)
  if (cache) return { movie: JSON.parse(cache) }

  let { movie } = await serverLoader()
  sessionStorage.setItem(cacheKey, JSON.stringify(movie))
  return { movie }
}
