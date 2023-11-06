/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import './App.css'

function App() {
	const [menuData, setMenuData] = useState(null)

	const handleFetchMenuClick = async () => {
		// skicka AJAX request till servern
		// vänta på svar
		// spara svaret i state-variabel

		// fetch('localhost:1337/api/menu')  <-- Detta fungerar inte i production
		try {
			const response = await fetch('/api/menu')
			const data = await response.json()
			setMenuData(data)
		} catch {
			// Om något går fel, visa info för utvecklaren
			console.log('Misslyckades med fetch!');
		}
	}

	return (
		<main>
			<section>
				<h1> Fullstack demo </h1>
				<button onClick={handleFetchMenuClick}> Hämta menyn </button>
			</section>
			<section>
				{menuData
					? menuData.map(menuItem => (
						<p key={menuItem.id}>
							{menuItem.name} ... {menuItem.price}
						</p>
					))
					: <p> Klicka för att hämta menyn! </p>
				}
			</section>

		</main>
	)
}

export default App
