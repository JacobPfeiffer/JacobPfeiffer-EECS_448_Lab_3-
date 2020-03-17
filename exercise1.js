window.addEventListener('DOMContentLoaded', (event)=>{

	document.getElementById('validate').addEventListener('click', (clk)=>{
		pw1=document.getElementById('pw1').value
		console.log(pw1)
		pw2=document.getElementById('pw2').value
		console.log(pw2)
		if(pw1!=pw2){
			window.alert("Passwords are not the same!")
			document.getElementById('pw1').value=''
			document.getElementById('pw2').value=''
		}
		else if (pw1.length<8 || pw2.lengt<8){
			window.alert("Password must be 8 letters in length!")
			document.getElementById('pw1').value=''
			document.getElementById('pw2').value=''
		} 
	});

});