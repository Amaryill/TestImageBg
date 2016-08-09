

window.onload = function () {
	var tableauIMG = ["src/Chrysanthemum.jpg","src/Desert.jpg","src/Hydrangeas.jpg","src/Jellyfish.jpg","src/Koala.jpg","src/Lighthouse.jpg","src/Penguins.jpg","src/Tulips.jpg"];
	
	function changeBackground(bUrl) {
		document.getElementById('bg').style.background=bUrl;
		return document.getElementById('bg').src=bUrl;
	}
	
	var k = 0;
	
    document.addEventListener('keydown', function(e) {

    	switch(e.keyCode) {
            case  37 :
                console.log('keydown : LEFT arrow');
                k--;
                if (k<0){k=0;}
            	console.log(k);
                changeBackground(tableauIMG[k]);
                break;
            case 39 : 
            	console.log('keydown : RIGHT arrow');
            	k++;
            	if (k===tableauIMG.length){k=tableauIMG.length-1;}
            	console.log(k);
            	changeBackground(tableauIMG[k]);
            	break;
        }
    });
};


