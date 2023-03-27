let contenu=document.getElementById("calcul");

class BaseCalculator {
    constructor(contenu) {
        this.contenu=contenu;
        this.reversion=[]; //tableau de retour en arrière
    }

    afficher(value){
        console.log(value);
        this.contenu.innerText+=value;
        this.reversion.push(this.contenu.innerText);
    }

    cancel(){
        this.contenu.innerText= " ";
    }

    submit(){
        let val=contenu.innerText;
        let result= eval(val);
        let historique=document.getElementById("historique");

        let Div=document.createElement("div");//crée un element qui est une div

        Div.innerText=val+"="+result;


        historique.append(Div); // ajoute en fin
        this.contenu.innerText=result;
        this.reversion.push(this.contenu.innerText);
    }

    back(){
        this.reversion.pop() //enlève le dernier element du tableau
        if(this.reversion.length===0){ //on regarde si la liste est vide
            this.contenu.innerText="";
        }
        else {
            this.contenu.innerText=this.reversion[this.reversion.length-1];
        }
    }
}

let calculator = new BaseCalculator(contenu);