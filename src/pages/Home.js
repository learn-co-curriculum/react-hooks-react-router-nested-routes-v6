import UserCard from '../components/UserCard'
import { Outlet, useOutletContext } from 'react-router-dom'

function Home() {
	const users = useOutletContext()

	const userList = users.map((user) => {
		return <UserCard key={user.id} user={user} />
	})

	return (
		<>
			<main>
				<h1>Home!</h1>
				<Outlet context={users} />
				{userList}
			</main>
		</>
	)
}

export default Home
