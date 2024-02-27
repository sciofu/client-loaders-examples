export {homeView as default} from '../pages';

let cache
export async function clientLoader({ serverLoader }) {
  if (cache) return { query: cache }

  let loaderData = await serverLoader()
  let query = await loaderData.query
  cache = query
  return { query }
}

clientLoader.hydrate = true
