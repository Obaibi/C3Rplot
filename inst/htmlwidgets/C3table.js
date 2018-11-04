HTMLWidgets.widget({	

  name: 'C3table',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {



        // TODO: code to render the widget, e.g.
        var titres = Object.keys(x.message);

        //Création de l'arborescence HTML du tableau
        eltable = document.createElement("table");
        //Nombre de lignes dans le tableau
        eltr = []
        
        //Lignes ajoutées dans le tableau
        for(i=0;i<=x.message[titres[0]].length;i++)
        {
          eltr.push(document.createElement("tr"));  
        }
        
        for(i=0;i<eltr.length;i++){
          eltable.appendChild(eltr[i]);
        }
 
        //Header table 
        for(i=0;i<titres.length;i++){
          eltr[0].appendChild(document.createElement("th"));
						 if(Array.isArray(x.color) && x.color.length == titres.length ){
          																			eltr[0].childNodes[i].style.backgroundColor = x.color[i];
          	 			 																	}
																          	 			 else if(Array.isArray(x.color) && x.color.length != titres.length ){
																          	 			 	     eltr[0].childNodes[i].style.backgroundColor = x.color[0];	
																          	 			     }
																          				else {
																          	 			 	     eltr[0].childNodes[i].style.backgroundColor = x.color;	
																          	 			     }

          eltr[0].childNodes[i].innerText = titres[i];
          eltr[0].childNodes[i].style.textAlign = "center";
        }
        //Contenu table
        for(i=1; i<eltr.length; i++){
          for(j=0;j<titres.length;j++){
            eltr[i].appendChild(document.createElement("td"));
            eltr[i].childNodes[j].innerText = x.message[titres[j]][i-1];
            eltr[i].childNodes[j].style.textAlign = "center";
          }
        }

        /* Titre général */
        var GeneralTitle = document.createElement("p"); 
        GeneralTitle.innerText = x.title;
        GeneralTitle.style.textAlign = "center";

        /* Appending all the elements in the div */
        if(el.childNodes.length > 0){ for(i=0;i<el.childNodes.length;i++){
        																		el.childNodes[i].remove();
        																} 
        															}
        if(x.position == "top"){el.appendChild(GeneralTitle);}
        el.appendChild(eltable);
        if(x.position == "bottom"){el.appendChild(GeneralTitle);}

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});