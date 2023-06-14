const url = 'https://burgers-hub.p.rapidapi.com/burgers';
try {
	fetch(url, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '2712cd5ad7mshbcfd45d0ed8dc1fp195059jsnf9d789e1a5c2',
			'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
		},
	})
		.then(dataWrappedByPromise => dataWrappedByPromise.json())
		.then(data => {
			console.log(data);
		})
}
catch (error) {
	console.log(error)
}