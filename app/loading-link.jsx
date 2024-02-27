export function Loading() {
  return (
    <ul>
      {Array.from({ length: 12 }).map((_, i) => (
        <li key={i}>
          <RandomLengthDashes /> <RandomLengthDashes /> <RandomLengthDashes />
        </li>
      ))}
    </ul>
  )
}

function RandomLengthDashes() {
  return <span>{['🤔', '🫣', '😵‍💫', '🤠'].at(Math.floor(Math.random() * 3)).repeat(Math.floor(Math.random() * 5))}</span>
}
