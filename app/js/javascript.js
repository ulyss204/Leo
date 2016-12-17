document.getElementById('hamburger').addEventListener('click', function() {
    
    document.querySelector('body').classList.toggle('active');
    
});
for (var i = 0; i < document.getElementById('footprint').children.length; i++) {

    	document.getElementById('footprint').children[i].classList.add('footprint-item');
    	setInterval(function(){
    		document.getElementById('footprint').classList.add('footprint-hidden');
    	},3000);
    	setInterval(function(){
    		document.getElementById('footprint').classList.remove('footprint-hidden');
    	},6000);
}