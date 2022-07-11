export function Post ({ body, author }) {
  return (
    <div>
        <strong>{author}</strong>
      <p>
        {body}
      </p>
    </div>
  )
}