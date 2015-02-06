/*
 * master.js
 */

/* function to insert text variables id=html id text= text to insert */
function insertText(id, text) {
	/* Fields */
	var findId = id;
	var addText = text;
	
	/* Create Elements */
	var p = document.createElement('p');
	var newText = document.createTextNode(addText);

	
	p.appendChild(newText);
	document.getElementById(findId).appendChild(p);
}

insertText("a1section1Body","Updated by JS");
