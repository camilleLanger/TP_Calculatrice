let contenu=document.getElementById("calcul");

function afficher(value){
    console.log(value);
    contenu.innerText+=value;
}

function cancel(){
    contenu.innerText= " ";
}
function submit(){
    let val=contenu.innerText;
    let result= eval(val);
    let historique=document.getElementById("historique");

    let Div=document.createElement("div");//crée un element qui est une div

    Div.innerText=val+"="+result;


    historique.prepend(Div); // ajoute au début du div
    contenu.innerText=result;
}