function enter(event) {
	if(event.keyCode==13){

		let span=document.createElement('span')
		let div=document.createElement('div')
		let img=document.createElement('img')


		span.innerHTML=document.getElementById('list').value
		img.src='img/garbage.svg'


		span.classList.add('p')
		img.classList.add('garbage')
		div.classList.add('div')


	
	div.appendChild(img)
	div.appendChild(span)
	document.getElementById('text').appendChild(div)
	document.getElementById('list').value=''
	}
}

function change (event) {
	let target=event.target
	console.log(target)
	if (target.tagName=='IMG') {
		let check = confirm('Вы точно хотите удалить текст?')

		if (check==true) {
			target.parentElement.remove()
		}
	}

	if (target.tagName=='SPAN') {
		target.classList.add('complete')
	}
}
function deleteAll (argument) {
	document.getElementById('text').innerHTML=''
}

function rotate (argument) {
	document.getElementById('pen').classList.add('rotate')
}

function backRotate (argument) {
	document.getElementById('pen').classList.remove('rotate')
}