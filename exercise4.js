window.addEventListener('DOMContentLoaded', (event)=>{

	document.getElementById('validate').addEventListener('click', (clk)=>{
		rBorder=document.getElementById('redval').value
		gBorder=document.getElementById('greenval').value
		bBorder=document.getElementById('blueval').value
		wBorder=document.getElementById('width').value+"px"
		rBackground=document.getElementById('redval1').value
		gBackground=document.getElementById('greenval1').value
		bBackground=document.getElementById('blueval1').value
		rgbBackground="rgb("+rBackground+","+gBackground+","+bBackground+")"
		rgbBorder="rgb("+rBorder+","+gBorder+","+bBorder+")"
		console.log(rgbBackground)
		console.log(rgbBorder)
		if((rBorder>=0 && rBorder<=255) && (gBorder>=0 && gBorder<=255) 
		&& (bBorder>=0 && bBorder<=255) && (rBackground>=0 && rBackground<=255) 
		&& (gBackground>=0 && gBackground<=255) && (bBackground>=0 && bBackground<=255)){
			document.getElementById('styleme').style.backgroundColor=rgbBackground
			document.getElementById('styleme').style.borderStyle="solid"
			document.getElementById('styleme').style.borderWidth=wBorder
			document.getElementById('styleme').style.borderColor=rgbBorder
		}
		else{
			window.alert("Pick color values in the range 0-255")
		}
	
		

	});

});