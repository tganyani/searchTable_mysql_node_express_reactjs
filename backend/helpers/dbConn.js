

const mysql = require('mysql2/promise')

const config = require('./dbConfig')

async function query(sql){
	const conn = await mysql.createConnection(config)
	const results = await conn.execute(sql)
	await conn.end()
	return results
}


module.exports = query