document.getElementById('hamburger').addEventListener('click', function() {
    
    document.querySelector('body').classList.toggle('active');
    
});
var timeInt = setInterval(function(){
	document.getElementById('footprint').classList.toggle('_footsteps-active');
	
},3001); 

  	
