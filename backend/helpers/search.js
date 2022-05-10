const search = (data,searchHelpers)=>{
	const keys = ['quantity','distance']
	switch(searchHelpers.searchMode){
		case "INCLUDES":
			return data.filter(d=>d.name.toLowerCase().includes(searchHelpers.searchTerm))
		case "GREATER":
			return data.filter(d=>keys.some(key=>Number(d[key]) > Number(searchHelpers.searchTerm)))
		case "EQUAL":
			return data.filter(d=>keys.some(key=>Number(d[key]) === Number(searchHelpers.searchTerm)))
		case "LESSER":
			return data.filter(d=>keys.some(key=>Number(d[key]) < Number(searchHelpers.searchTerm)))
		default:
			return data
	}
}

module.exports = search