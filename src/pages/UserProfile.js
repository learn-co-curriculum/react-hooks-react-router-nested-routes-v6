import { useParams, useOutletContext } from "react-router-dom"
import { useState } from "react"

function UserProfile() {
  const params = useParams()
  const users = useOutletContext()

  const user = users.find((user) => parseInt(user.id) === parseInt(params.id))

  if (!user) {
    return <h1>Loading...</h1>
  }

  return <aside>{<h1>{user.name}</h1>}</aside>
}

export default UserProfile
