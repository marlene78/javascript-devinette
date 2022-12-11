document.addEventListener('DOMContentLoaded',function(event){

    // fonction de génération de nombre aléatoire avec un max fourni 

    function genereNombre(max){
        return Math.floor((Math.random()*max)+1);
    }
   
    var jechoisisUnNombre = null; 
    var nbTentatives = 0; 
    var echange = document.getElementById('echange'); 

    document.getElementById('bouton').addEventListener('click',demarreJeu);

    function demarreJeu(e){
        e.preventDefault(); // je neutralise le comportement naturel de submit

        if(jechoisisUnNombre === null){
            jechoisisUnNombre = genereNombre(100); 
          
        }  
       
        var saisie = document.getElementById('number').value; 

        if(!isNaN(saisie) && saisie.trim()!=''){ // trim() retire les espaces début et à la fin
            // il s'agit d'un nombre , pas vide 

            nbTentatives ++;
            echange.innerHTML += " vous proposez " + saisie + '<br>'; 

            if (saisie == jechoisisUnNombre){

                echange.innerHTML = "Vous avez gagné ! vous avez trouvé " + jechoisisUnNombre + " en "  +nbTentatives + " tentative" 
                +(nbTentatives >1 ? 's': '') + "<br> j'en choisis un autre .....<br>";
                jechoisisUnNombre = null; 
                nbTentatives = 0;
            }
            else if(saisie < jechoisisUnNombre){
                echange.innerHTML += "Le nombre que j'ai choisi est plus grand <br>"; 
            }
            else
            {
                echange.innerHTML += "Le nombre que j'ai choisi est plus petit <br>"; 
            }
            if(nbTentatives == 10){
              
                nbTentatives = 0;
                echange.innerHTML = "Vous avez atteint 10 tentatives sans trouver mon chiffre qui était " + jechoisisUnNombre + 
                "<br> j'en choisi un autre ...<br>";
                jechoisisUnNombre = null;
            }
            document.getElementById('number').value ='';// vide le champ de saisie 
            document.getElementById('number').focus();// place le curseur dans le champ pour une nouvelle
        }
       
    else
    {
    echange.innerHTML += "vous devez saisir un nombre <br>"; 
        
    }
    }

}); 