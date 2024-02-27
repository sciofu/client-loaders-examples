import { defer } from '@remix-run/react'

export async function loader({ context: { env } }) {
  return defer({
    query: env.DB.prepare(
      `SELECT * FROM movies WHERE thumbnail != '' ORDER BY RANDOM() LIMIT 12`,
    ).all(),
  })
}
