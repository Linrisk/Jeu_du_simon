let niveau;
let score;
let etat;
let compteur;
let niveautotal=1;
let points=0;

let backgroundclean="#EEEEEE";
let backgrounddark="#303030";

function HideStart(id,idpassage) {
	document.getElementById(id).style.display = 'none';
	document.getElementById('aide').style.display = 'none';
	document.getElementById(idpassage).style.display = 'flex'; 
	  // indic none temporairement test//
	document.getElementById('infos').style.display = 'flex'; 
	niveau=[];
}        


function GetRandomInt(max) {
  	return Math.floor(Math.random() * Math.floor(max));
}

function sleep(milliseconds) {
  	const date = Date.now();
  	let currentDate = null;
  	do { currentDate = Date.now();
  	} while (currentDate - date < milliseconds);
}

function PassageNiveau(){

	document.getElementById("sum").innerHTML=niveautotal;
	document.getElementById("sum2").innerHTML=points;


	let random =GetRandomInt(4);
	compteur=0;
	etat=0;

	switch(random){
		case 0:
		niveau.push('68');
		break;

		case 1:
		niveau.push('70');
		break;

		case 2:
		niveau.push('72');
		break;

		case 3:
		niveau.push('74');

		break;
	}

	switchcolor(niveau);
	etat=1;
}

function AffKeyCode(){
	if(etat==1){
		if(event.keyCode){
		 	if(event.keyCode==niveau[compteur]){
				if(niveau[compteur+1]!==undefined){
					compteur++; 
				} else {

				 	setTimeout(function(){
					 	document.getElementById('textes').style.display='none';
					 	document.getElementById('alert').style.display = 'flex';
					 	document.getElementById('infos').style.display = 'none'; 
					 	document.getElementById('level1').style.display = 'none';		
						
						setTimeout(function(){
							niveautotal=niveautotal+1;
							points=points+1;
							document.getElementById('alert').style.display = 'none';
							document.getElementById('infos').style.display = 'flex'; 
					 		document.getElementById('level1').style.display = 'flex';
					 		document.getElementById('textes').style.display='flex';

							PassageNiveau()
					
						},2500);
								

					},100);
			
				}
		 	} else {
		 	
		 		document.getElementById('textes').style.display='none';
				document.getElementById('perdu').style.display = 'flex';
				document.getElementById('infos').style.display = 'none'; 
				document.getElementById('level1').style.display = 'none';
		 		etat=0;

		 	}
		}	
	} else {}
	
}


function Redirection(){
    document.location.href="index.html";
}

function switchcolor(niveau){
	console.log(niveau);
	console.log(niveau.length)

	let idel;
	let couleurdep;
	let couleurarrv;


	if(niveau[0] === undefined)
		return;

	switch(niveau[0]){

		case '68':
			idel='carre1';
			couleurarrv="##F82614";
			couleurdep="#D83B2D";
		break;


		case '70':
			idel='carre2';
			couleurarrv="#94FF8D";
			couleurdep="#6DBF67";
		break;

		case '72':
			idel='carre3';
			couleurarrv="#EBC135";
			couleurdep="#ECCC61";
		break;

		case '74':
			idel='carre4';
			couleurarrv="#126BF1";
			couleurdep="#5A99F8";
		break;

	}

	

setTimeout(function(){
	document.getElementById(idel).style.backgroundColor = couleurarrv;
},500);

	
setTimeout(function(){ 
	document.getElementById(idel).style.backgroundColor = couleurdep;
	switchcolor(niveau.slice(1,niveau.length)); 
},1000);

	bloque = true
	setTimeout(function(){
 		bloque = false },niveau.length*1000); 
}

document.body.addEventListener('keydown',AffKeyCode);

function Darkmode(nbCheck) {

    if(document.getElementById(nbCheck).checked == true){
        document.getElementById("body").style.backgroundColor = "#303030";
        document.getElementById("Titre").style.color="#B7A9A9";
        document.getElementById("sous-titre").style.color="#B7A9A9";
       	document.getElementById("infos").style.color="#B7A9A9";
       	document.getElementById("start").style.color='#302E2E';
       	document.getElementById("start").style.backgroundColor= "#FFFFFF";
       	document.getElementById("level1").style.backgroundColor="#575757";
       	document.getElementById("perdu").style.color="#B7A9A9";
       	document.getElementById("alert").style.color="#B7A9A9";
    }

    else {
   		document.getElementById("body").style.backgroundColor = "#EEEEEE";
    	document.getElementById("Titre").style.color="black";
    	document.getElementById("sous-titre").style.color="black";
    	document.getElementById("infos").style.color="#212529";
    }
}

function ChangeClass() { 
    document.getElementById('textes').className = "row"; 
}
