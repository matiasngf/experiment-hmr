import { useState } from "react"

export const Page = () => {
  const [clicked, setClicked] = useState(0)
  return (
    <div>
      <p>
        Clicked {clicked} times!
      </p>
      <button onClick={() => setClicked(clicked + 1)}>Click me</button>
    </div>
  )
}