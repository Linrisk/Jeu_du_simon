let niveau;
let score;
let etat;
let compteur;
let niveautotal=1;
let points=0;

let backgroundclean="#EEEEEE";
let backgrounddark="#303030";

function hidestart(id,idpassage) {
	document.getElementById(id).style.display = 'none';
	document.getElementById(idpassage).style.display = 'flex'; 
	document.getElementById('indic').style.display = 'flex'; 
		document.getElementById('infos').style.display = 'flex'; 
	niveau=[];
}        


function getRandomInt(max) {
  	return Math.floor(Math.random() * Math.floor(max));
}

function sleep(milliseconds) {
  	const date = Date.now();
  	let currentDate = null;
  	do {
    	currentDate = Date.now();
  	} while (currentDate - date < milliseconds);
}

function passageniveau(){

	document.getElementById("sum").innerHTML=niveautotal;
	document.getElementById("sum2").innerHTML=points;


	let random =getRandomInt(4);
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

	console.log("Le nouveau tableau est : "+ niveau);

// Affichage du pattern 
	
			
	 switchcolor(niveau);
	etat=1;
}
// Recuperation des touches par le KeyEvent 





function affKeyCode()
{
	//Si il a un tableau rempli
	 if(etat==1){
	if(event.keyCode){
	 		if(event.keyCode==niveau[compteur]){

				if(niveau[compteur+1]!==undefined){
					compteur++;
				} else {

			 		setTimeout(function(){
							alert("GG WP MONTAGE DE NIVEAU !");
							niveautotal=niveautotal+1;
							console.log(niveautotal);
							points=points+1;
							passageniveau();

						},100);

						
				}
	 		} else {
	 	
	 			document.getElementById('level1').style.display = 'none'; 
	 			document.getElementById('perdu').style.display = 'flex'; 
	 			document.getElementById('indic').style.display = 'none'; 
	 			etat=0;

	 		}
	 	}
		
	} else {
	}
	
}

function restart(){
	 document.getElementById('start').style.display = 'flex';
	 document.getElementById('perdu').style.display = 'none'; 
}



function switchcolor(niveau){
	console.log(niveau);
	console.log(niveau.length)

	let idel;
	let couleurdep;
	let couleurarrv;


	if(niveau[0] === undefined)
		return

	switch(niveau[0]){

		case '68':
			idel='carre1';
			couleurarrv="#FF3827";
			couleurdep="#B23025";
		break;


		case '70':
			idel='carre2';
			couleurarrv="#4CE737";
			couleurdep="#36B225";
		break;

		case '72':
			idel='carre3';
			couleurarrv="#FAF733";
			couleurdep="#EBC727";
		break;

		case '74':
			idel='carre4';
			couleurarrv="#FDB65E";
			couleurdep="#DA8B28";
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

document.body.addEventListener('keydown',affKeyCode);