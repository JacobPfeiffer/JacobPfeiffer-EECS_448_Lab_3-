
window.addEventListener('DOMContentLoaded', (event)=>{
	let images= ["http://cdn.akc.org/content/article-body-image/corgi_puppy_1.jpg",
	"http://cdn.akc.org/content/article-body-image/dalmatian_puppy_1.jpg",
	"http://cdn.akc.org/content/article-body-image/french_bulldog_puppy.jpg",
	"http://cdn.akc.org/content/article-body-image/bulldog_puppy.jpg",
	"http://cdn.akc.org/content/article-body-image/rottweiler_puppy.jpg"]
	index=0
	document.getElementById('image').src=images[index];
	document.getElementById('previous').addEventListener('click', (clk)=>{
		if(index-1<0){
			index=images.length-1
			document.getElementById('image').src=images[index];
		}
		else{
			index=index-1
			document.getElementById('image').src=images[index];
		}
	});
	document.getElementById('next').addEventListener('click', (clk)=>{
		if(index+1<images.length){
			index=index+1
			document.getElementById('image').src=images[index];
		}
		else{
			index=0
			document.getElementById('image').src=images[index];
		}
	});
});