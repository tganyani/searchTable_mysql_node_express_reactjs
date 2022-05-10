const express = require('express')
const router = express.Router()

const {createTable, getTables,deleteTable,updateTable} = require('./crud')
const search = require('./search')

router.get('/tables',async (req,res,next)=>{
	try{
		const results = await getTables(req.body)
		const filteredResults = await search(results,req.query)
		res.json(filteredResults.splice((Number(req.query.page)-1)*10,10))
	}catch(err){
		next(err)
	}
})
.post('/newtable',async (req,res,next)=>{
	try{
		res.json(await createTable(req.body))
	}catch(err){
		next(err)
	}
})
.delete('/deletetable',async (req,res,next)=>{
	try{
		res.json(await deleteTable(Object.keys(req.query)[0]))
	}catch(err){
		next(err)
	}
})
.patch('/update',async (req,res,next)=>{
	try{
		res.json(await updateTable(req.body))
	}catch(err){
		next(err)
	}
})


module.exports = router