import { useOutletContext, useParams } from 'react-router-dom'

function UserProfile() {
	const params = useParams()
	const users = useOutletContext()

	const user = users.find((user) => parseInt(user.id) === parseInt(params.id))

	if (!user) {
		return <h1>Loading...</h1>
	}

	return (
		<aside>
			<h1>{user.name}</h1>
		</aside>
	)
}

export default UserProfile
