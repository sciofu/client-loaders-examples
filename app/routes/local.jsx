export {homeLoader as loader} from '../pages';
export {homeView as default} from '../pages';

// keep the home page data in memory so back clicks are instant and the data
// doesn't change
let cache
export async function clientLoader({ serverLoader }) {
  if (cache) return { query: cache }

  let loaderData = await serverLoader()
  let query = await loaderData.query
  cache = query
  return { query }
}

// So that the client loader is called on initial load
// clientLoader.hydrate = true
