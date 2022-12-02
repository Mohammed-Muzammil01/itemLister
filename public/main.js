var form = document.getElementById('content');
var itemList = document.getElementById('ourList');
var searchbar = document.getElementById('searchbar');

// form.addEventListener('submit',emptyAlert);
// function emptyAlert(e) {
// 	e.preventDefault();
// 	var newItem = document.getElementById('enlist').value;
// 	if(newItem == ''){
// 		alert('Empty string');
// 	}
// 	else{
// 		console.log(2);
// 	}
// 	}

form.addEventListener('submit',addItem);

function addItem(e){
	e.preventDefault();
	var newItem = document.getElementById('enlist').value;
	//console.log(1);
	if(newItem == ''){
		alert('Empty string');
	}
	else{
		var li = document.createElement('li');
		li.className = 'litem';
		li.appendChild(document.createTextNode(newItem));
		var del = document.createElement('button');
		del.className = 'delete';
		del.appendChild(document.createTextNode('X'));
		li.appendChild(del);
		itemList.appendChild(li);
		}
	document.getElementById('enlist').reset();
}

itemList.addEventListener('click',remove);

function remove(e){
	//console.log(1);
	if(e.target.classList.contains('delete')) {
		if(confirm('Are you sure?')){
			var li = e.target.parentElement;
			itemList.removeChild(li);
			}
	}
}

searchbar.addEventListener('keyup',searchItem);

function searchItem(e)
{
	var text = e.target.value.toLowerCase();
	var items = itemList.getElementsByTagName('li');
	Array.from(items).forEach(function(item)
	{
		var itemContent = item.firstChild.textContent;
		if (itemContent.toLowerCase().indexOf(text) != -1){
			item.style.display = 'block';
		}
		else{
			item.style.display = 'none';
		}
	});
}
// function clearInput(){
// 	var input = document.getElementById('enlist');
// 	if(input.value != ''){
// 		input.value = '';
// 	}
// }
