if (document.contains(document.querySelector('body'))) {
	function funcao () {
		console.log('body mudando')
	}
	document.querySelector('body').addEventListener('change', funcao, false)
}
