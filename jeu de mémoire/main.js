const divResultat= document.querySelector('#resultat');
divResultat.innerHTML="";
let tabJeu=[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

//  let tabResultat= [
//     [1,4,5,1],
//     [3,8,6,2],
//     [6,7,3,7],
//     [4,2,8,5]
//  ];

let tabResultat = generateTabAleatoire();
let oldSelection =[];
let nbAffiche = 0;
let ready = true;

afficherTableau();

function afficherTableau(){
    console.log('hhhhhhh')
    let txt= "";
    for(let i=0; i<tabJeu.length; i++){
        txt += `<div>`;
        for(let j=0; j<tabJeu[i].length; j++){
            if(tabJeu[i][j]===0){
                txt += `<button class='btn btn-primary m-2' style= 'height:100px ; width:100px' ' onClick = verif("${i}-${j}")'>Afficher</button>`;
            }else{
                txt += `<img src=${getImage(tabJeu[i][j])} style = 'height:100px ; width:100px' class= 'm-2'> `;
            }
            
        }
        
        txt += `</div>`;
    }
    divResultat.innerHTML = txt;
    
};
console.log("bonjour")
function getImage(valeur){
    console.log("ssssss");
    let imgTxt = "";
    switch(valeur){
        case 1:imgTxt += `image/cat.jpg`;
        break;
        case 2:imgTxt += `image/deer.jpg`;
        break;
        case 3:imgTxt += `image/fish.jpg`;
        break;
        case 4:imgTxt += `image/fox.jpg`;
        break;
        case 5:imgTxt += `image/macaw.jpg`;
        break;
        case 6:imgTxt += `image/sparrows.jpg`;
        break;
        case 7:imgTxt += `image/wolf.jpg`;
        break;
        case 8:imgTxt += `image/east.jpg`;
        break;
        default : console.log("cas non pris en compte");
    }
    
    return imgTxt;
};


function verif(bouton){
    console.log('dddddd');
   if(ready) {
    console.log('ttttt');
        nbAffiche ++;
        let ligne = bouton.toString(0,1);
        let colonne = bouton.toString(1,2);
        tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
        afficherTableau();
         console.log(`ligne :${ligne}`);
         console.log(`colonne : ${colonne}`);
        if(nbAffiche>1){
            ready = false;
            setTimeout(() => {
                if(tabJeu[ligne][colonne] !== tabResultat[oldSelection[0]][oldSelection[1]]){
                    tabJeu[ligne][colonne] = 0;
                    tabJeu[oldSelection[0]][oldSelection[1]] = 0; 
                }
                afficherTableau();
                ready = true;
                nbAffiche = 0;
                oldSelection = [ligne,colonne];
             },1000)
           
        
        }else{
            oldSelection = [ligne,colonne];
         }
    }
};

function generateTabAleatoire(){
    let tab=[];
    let nbImagePosition= [0,0,0,0,0,0,0,0];
    for(let i=0;i<4;i++){
        let ligne =[];
        for(let j=0; j<4; j++){
            let fin = false;
            while(!fin){
                let randomImage = Math.floor(Math.random()*8);
                if(nbImagePosition[randomImage] <2){
                    ligne.push(randomImage +1);
                    nbImagePosition[randomImage]++;
                    fin = true;
                }
            }
           
        }
        tab.push(ligne);
    }
    return tab;
};