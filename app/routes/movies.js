import { defer } from '@remix-run/react'

export async function loader({ context: { env } }) {
  return {
    query: await env.DB.prepare(
      `SELECT * FROM movies WHERE thumbnail != '' ORDER BY RANDOM() LIMIT 12`,
    ).all(),
  }
}
