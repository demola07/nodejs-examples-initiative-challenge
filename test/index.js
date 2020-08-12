const tape = require('tape')
const bent = require('bent')
const getPort = require('get-port')

const server = require('../')

const getJSON = bent('json')
const getBuffer = bent('buffer')

// Use `nock` to prevent live calls to remote services

const context = {}

tape('setup', async function (t) {
	const port = await getPort()
	context.server = server.listen(port)
	context.origin = `http://localhost:${port}`

	t.end()
})

tape('should get dependencies', async function (t) {
	const html = (await getBuffer(`${context.origin}/dependencies`)).toString()

	// assertions etc
})

// more tests

tape('teardown', function (t) {
	context.server.close()
	t.end()
})
