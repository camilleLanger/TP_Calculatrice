let contenu=document.getElementById("calcul");

class BaseCalculator {
    constructor(contenu) {
        this.contenu=contenu;
        this.reversion=[]; //tableau de retour en arrière

        this.url = 'http://localhost:3000';
        this.xhttp = new XMLHttpRequest();
        this.xhttp.onload = function() {
            console.log(this.responseText);
        }
        this.date=Date.now();
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
        try {
            let val=contenu.innerText;
            let result= eval(val);


            let historique=document.getElementById("historique");

            let Div=document.createElement("div");//crée un element qui est une div

            Div.innerText=val+"="+result;


            historique.append(Div); // ajoute en fin
            this.contenu.innerText=result;
            this.reversion.push(this.contenu.innerText);

            this.xhttp.open("POST",'http://localhost:3000/success-event', true);
            this.xhttp.setRequestHeader("Content-type", "application/json");
            this.xhttp.send(JSON.stringify({
                timeTakenMs:Math.abs(new Date()-this.date)
            }));
            this.date=Date.now();

        }catch (error){
            this.xhttp.open("POST", 'http://localhost:3000/error-event', true);
            this.xhttp.setRequestHeader("Content-type", "application/json");
            this.xhttp.send(JSON.stringify({
                created_at:Date.now()
            }));
        }

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





