// Initial SSR and first visits will get fresh data from the DB on the server

export async function loader({ params, context: { env } }) {
  let result = await env.DB.prepare('SELECT * FROM movies WHERE id = ?1')
    .bind(params.id)
    .first()
  return { movie: result }
}
