import localforage from 'localforage';

export {movieView as default} from '../pages';
export {movieLoader as loader} from '../pages';

export async function clientLoader({ serverLoader, params }) {
  let cacheKey = `movie-${params.id}`

  let cached = await localforage.getItem(cacheKey)
  if (cached) return { movie: JSON.parse(cached) }

  let { movie } = await serverLoader()
  localforage.setItem(cacheKey, JSON.stringify(movie))

  return { movie }
}
