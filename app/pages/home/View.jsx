import { Await, useLoaderData } from '@remix-run/react'
import { Suspense } from "react"

import { MovieLink } from "../../movie-link"
import { Loading } from '../../loading-link'

export default function Home() {
  let { query } = useLoaderData()

  return (
    <>
      <title>Data Loading in Remix</title>

      <Suspense fallback={<Loading />}>
        <Await resolve={query}>
          {(query) => (
            <ul>
              {query.results.map((movie) => (
                <li key={movie.id}>
                  <MovieLink movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </>
  )
}