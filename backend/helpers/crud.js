const query = require('./dbConn')

async function getTables(data){
	const [results,] = await query(`SELECT* FROM testTable `)
	return results
}


async function createTable(data){
	const result = await query(`INSERT INTO testTable (name,quantity,distance) VALUES("${data.name}",${data.quantity},${data.distance})`)
	let message = ""
	if(result[0].affectedRows){
		message = "The table was created successfully"
	}
	else{
		message = "Error while creating the table"
	}
	return {message}
}

async function deleteTable(data){
	const result = await query(`DELETE FROM testTable WHERE id=${data}`)
	let message = "Error while deleting the table"
	if(result[0].affectedRows){
		message = "The table row was deleted successfully"
	}
	return {message}
}

async function updateTable(data){
	const result = await query(`UPDATE testTable SET name="${data.name}",quantity=${data.quantity},distance=${data.distance} WHERE id=${data.id}`)
	let message = "Error while updating the table"
	if(result[0].affectedRows){
		message = "The table row was updated successfully"
	}
	return {message}
}

module.exports = {createTable, getTables,deleteTable,updateTable}