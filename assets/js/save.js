let niveau;
let score;
let etat;
let compteur;

function hidestart(id,idpassage) {
	document.getElementById(id).style.display = 'none';
	document.getElementById(idpassage).style.display = 'flex'; 
	document.getElementById('indic').style.display = 'flex'; 
	niveau=[];
	score=0;	
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
	let random =getRandomInt(4);
	console.log(random);
	console.log(niveau);
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
	for( let i=0;i<niveau.length;i++){

		//  La il va illumer la case en début de game correspondante
		console.log("Le nombre est :"+i);
		if(niveau[i]==68){
			setTimeout(function(){ 
			console.log("D");
			let objet1= document.getElementById("carre1");
			objet1.style.backgroundColor="#FF3827";

			setTimeout(function(){

				objet1.style.backgroundColor="#B23025";

			},500);

		}, 1000);

		sleep(20);

		}
		
		if(niveau[i]==70){
			setTimeout(function(){ 
			console.log("F");
			let objet2= document.getElementById("carre2");
			objet2.style.backgroundColor="#4CE737";

			setTimeout(function(){

			objet2.style.backgroundColor="#36B225";

			},500);

		}, 1000);
			
			sleep(20);
		}

		if(niveau[i]==72){
			setTimeout(function(){ 
			console.log("H");
			let objet3= document.getElementById("carre3");
			objet3.style.backgroundColor="#FAF733";

			setTimeout(function(){

			objet3.style.backgroundColor="#EBC727";

			},500);

		}, 1000);

		sleep(20);

		}

		if(niveau[i]==74){
			setTimeout(function()
			{ 
			console.log("J");
			let objet4= document.getElementById("carre4");
			objet4.style.backgroundColor="#FDB65E";

				setTimeout(function()
				{

				objet4.style.backgroundColor="#DA8B28";

				},500);

			}, 1000);
		sleep(20);
		}
	}

// Recuperation des touches par le KeyEvent 

etat=1;
	
}

function affKeyCode(event)
{
	console.log(etat);
	//Si il a un tableau rempli
	 if(etat==1){

	 	if(event.keyCode){
	 		console.log("La touche appuye est : " + event.keyCode);
	 		console.log(compteur);
	 		if(event.keyCode==niveau[compteur]){
	 			/*
			 	if(event.keyCode==68){
					setTimeout(function(){ 
			let niveau;
let score;
let etat;
let compteur;

function hidestart(id,idpassage) {
	document.getElementById(id).style.display = 'none';
	document.getElementById(idpassage).style.display = 'flex'; 
	document.getElementById('indic').style.display = 'flex'; 
	niveau=[];
	score=0;	
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
	let random =getRandomInt(4);
	console.log(random);
	console.log(niveau);
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
	for( let i=0;i<niveau.length;i++){

		//  La il va illumer la case en début de game correspondante
		console.log("Le nombre est :"+i);
		if(niveau[i]==68){
			setTimeout(function(){ 
			console.log("D");
			let objet1= document.getElementById("carre1");
			objet1.style.backgroundColor="#FF3827";

			setTimeout(function(){

				objet1.style.backgroundColor="#B23025";

			},500);

		}, 1000);

		sleep(20);

		}
		
		if(niveau[i]==70){
			setTimeout(function(){ 
			console.log("F");
			let objet2= document.getElementById("carre2");
			objet2.style.backgroundColor="#4CE737";

			setTimeout(function(){

			objet2.style.backgroundColor="#36B225";

			},500);

		}, 1000);
			
			sleep(20);
		}

		if(niveau[i]==72){
			setTimeout(function(){ 
			console.log("H");
			let objet3= document.getElementById("carre3");
			objet3.style.backgroundColor="#FAF733";

			setTimeout(function(){

			objet3.style.backgroundColor="#EBC727";

			},500);

		}, 1000);

		sleep(20);

		}

		if(niveau[i]==74){
			setTimeout(function()
			{ 
			console.log("J");
			let objet4= document.getElementById("carre4");
			objet4.style.backgroundColor="#FDB65E";

				setTimeout(function()
				{

				objet4.style.backgroundColor="#DA8B28";

				},500);

			}, 1000);
		sleep(20);
		}
	}

// Recuperation des touches par le KeyEvent 

etat=1;
	
}

function affKeyCode(event)
{
	console.log(etat);
	//Si il a un tableau rempli
	 if(etat==1){

	 	if(event.keyCode){
	 		console.log("La touche appuye est : " + event.keyCode);
	 		console.log(compteur);
	 		if(event.keyCode==niveau[compteur]){
	 			/*
			 	if(event.keyCode==68){
					setTimeout(function(){ 
						console.log("D");
						let objet1= document.getElementById("carre1");
						objet1.style.backgroundColor="#FF3827";

							setTimeout(function(){

								objet1.style.backgroundColor="#B23025";

							},200);
					
					}, 1000);
				}

				if(event.keyCode==70){
					var objet2= document.getElementById("carre2");
					objet2.style.backgroundColor="pink";

				}

				if(event.keyCode==72){
					var objet3= document.getElementById("carre3");
					objet3.style.backgroundColor="yellow";
				}

				if(event.keyCode==74){
					var objet4= document.getElementById("carre4");
					objet4.style.backgroundColor="brown";
				}
				*/
				compteur++;

				
	 		}	

	 		setTimeout(function(){
					alert("GG WP MONTAGE DE NIVEAU !");
				},100);

				passageniveau();


	 		else {
	 			
	 			document.getElementById('level1').style.display = 'none'; 
	 			document.getElementById('perdu').style.display = 'flex'; 
	 			document.getElementById('indic').style.display = 'none'; 
	 			etat=0;

	 		}
	 	}
		
	}

	else {
	}
	
}

function restart(){
	 document.getElementById('start').style.display = 'flex';
	 document.getElementById('perdu').style.display = 'none'; 
}
			console.log("D");
						let objet1= document.getElementById("carre1");
						objet1.style.backgroundColor="#FF3827";

							setTimeout(function(){

								objet1.style.backgroundColor="#B23025";

							},200);
					
					}, 1000);
				}

				if(event.keyCode==70){
					var objet2= document.getElementById("carre2");
					objet2.style.backgroundColor="pink";

				}

				if(event.keyCode==72){
					var objet3= document.getElementById("carre3");
					objet3.style.backgroundColor="yellow";
				}

				if(event.keyCode==74){
					var objet4= document.getElementById("carre4");
					objet4.style.backgroundColor="brown";
				}
				*/
				compteur++;

				
	 		}	

	 		setTimeout(function(){
					alert("GG WP MONTAGE DE NIVEAU !");
				},100);

				passageniveau();


	 		else {
	 			
	 			document.getElementById('level1').style.display = 'none'; 
	 			document.getElementById('perdu').style.display = 'flex'; 
	 			document.getElementById('indic').style.display = 'none'; 
	 			etat=0;

	 		}
	 	}
		
	}

	else {
	}
	
}

function restart(){
	 document.getElementById('start').style.display = 'flex';
	 document.getElementById('perdu').style.display = 'none'; 
}
