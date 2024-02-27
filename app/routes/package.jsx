import { cacheClientLoader, useCachedLoaderData } from "remix-client-cache";

import { MovieLink } from '../movie-link';

export async function loader({ context: { env } }) {
  return {
    query: await env.DB.prepare(
      `SELECT * FROM movies WHERE thumbnail != '' ORDER BY RANDOM() LIMIT 12`,
    ).all(),
  };
}

export const clientLoader = (args) => cacheClientLoader(args, {key: 'package-cached-movies'})

clientLoader.hydrate = true;

export default function Home() {
  let { query } = useCachedLoaderData()

  return (
    <>
      <title>Data Loading in Remix</title>
        <ul>
          {query.results.map((movie) => (
            <li key={movie.id}>
              <MovieLink movie={movie} />
            </li>
          ))}
        </ul>
    </>
  )
}