// Creating todo function

function createNewElement(){
	var li = document.createElement('li');
	var theInputValue = document.getElementById("the-input").value;
	var textNode =document.createTextNode(theInputValue);

	li.appendChild(textNode);
	// console.log (li);

	if(theInputValue ===''){
		alert("Hey this cannot be empty")
	}else{

		document.getElementById("the-ul").appendChild(li);
	}

	document.getElementById("the-input").value ="";


	var thePanTag = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	thePanTag.className="close";
	thePanTag.appendChild(txt);
	li.appendChild(thePanTag);

// Removing item when click
	var closeButton = document.querySelectorAll(".close");
	console.log(closeButton);
	for(i = 0; i < closeButton.length; i++){
		closeButton[i].onclick = function(){
			var div = this.parentElement;
			div.style.display = "none";

		}
	} 



}
// Creating Checked Todo

var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event){

	console.log(event);
       if(event.target.tagName ==="LI"){
		event.target.classList.toggle('checked');
	}

	},false);

