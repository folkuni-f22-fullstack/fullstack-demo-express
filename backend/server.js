/* eslint-disable @typescript-eslint/no-unused-vars */
// Importera och konfigurera servern
import express from 'express'
import cors from 'cors'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 1337
const platformIndependentPath = dirname(fileURLToPath(import.meta.url))
const pathToFrontend = join(platformIndependentPath, '../dist')


// Middleware
app.use( cors() )

app.use( express.static(pathToFrontend) )

// Logger middleware
app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url}  `);
	next()
})


// Route handlers
// element.addEventListener('click', event => {})
app.get('/api/hello', (req, res) => {
	res.send('Hello from server!')
	// send, sendFile, sendStatus
})



// Starta servern
app.listen(port, () => {
	console.log('Server is listening on port ' + port);
})
