const mmi = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]
const shindo = ["0", "1", "2", "3", "4", "5-", "5+", "6-", "6+", "7"]

document.getElementById('msub').onclick = function(){
	let mmival = document.getElementById('mmiin').value
		if (mmi.includes(mmival)){
			if (mmival === "I"){
				console.log(mmival)
				document.getElementById('shindo').value = "0"
			}else if (mmival === "II"){
				console.log(mmival)
				document.getElementById('shindo').value = "1"
			}else if (mmival === "III"){
				console.log(mmival)
				document.getElementById('shindo').value = "2"
			}else if (mmival === "IV"){
				console.log(mmival)
				document.getElementById('shindo').value = "3"
			}else if (mmival === "V"){
				console.log(mmival)
				document.getElementById('shindo').value = "4"
			}else if (mmival === "VI"){
				console.log(mmival)
				document.getElementById('shindo').value = "5-"
			}else if (mmival === "VII"){
				console.log(mmival)
				document.getElementById('shindo').value = "5+"
			}else if (mmival === "VIII"){
				console.log(mmival)
				document.getElementById('shindo').value = "6-"
			}else if (mmival === "IX"){				
				console.log(mmival)
				document.getElementById('shindo').value = "6+"
			}else if (mmival === "X"){				
				console.log(mmival)
				document.getElementById('shindo').value = "6+"
			}else if (mmival === "XI"){				
				console.log(mmival)
				document.getElementById('shindo').value = "7"
			}else if (mmival === "XII"){				
				console.log(mmival)
				document.getElementById('shindo').value = "7"	
			}
			else {
				console.log(`Error: Type or value error`)
			}
		}else {
			console.log(`Error: MMI not found`)
			document.getElementById('errordisp').textContent = `Error: MMI not found!`
		}
}
document.getElementById('ssub').onclick = function(){
	let shindoval = document.getElementById('shindoin').value
		if (shindo.includes(shindoval)){
			if (shindoval === "0"){
				console.log(shindoval)
				document.getElementById('mmiin').value = "I"
			}else if (shindoval === "1"){
				console.log(shindoval)
				document.getElementById('mmiin').value = "II"
			}else if (shindoval === "2"){
				console.log(shindoval)
				document.getElementById('mmiin').value = "III"
			}else if (shindoval === "3"){
				console.log(shindoval)
				document.getElementById('mmiin').value = "IV"
			}else if (shindoval === "4"){
				console.log(shindoval)
				document.getElementById('mmiin').value = "V"
			}else if (shindoval === "5-"){
				console.log(shindoval)
				document.getElementById('mmiin').value = "VI"
			}else if (shindoval === "5+"){
				console.log(shindoval)
				document.getElementById('mmiin').value = "VII"
			}else if (shindoval === "6-"){
				console.log(shindoval)
				document.getElementById('mmiin').value = "VIII"
			}else if (shindoval === "6+"){
				console.log(shindoval)
				document.getElementById('mmiin').value = "X"
			}else if (shindoval === "7"){
				console.log(shindoval)
				document.getElementById('mmiin').value = "XII"
			}
			else {
				console.log(`Error: Type or value error`)
			}
		}else {
			console.log(`Error: Shindo not found`)
			document.getElementById('errordisp').textContent = `Error: Shindo not found!`
		}
}