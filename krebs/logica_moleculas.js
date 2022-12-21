//declaramos el array que conttiene los valores de las moleculas
let moleculas=["Acetil_CoA","citrato","cis_aconitato","isocitrato","alfa_cetoglutarato","succinil_CoA","succinato","fumarato","malato","oxalacetato"];

var lista_m=[0,1,2,3,4,5,6,7,8,9];
estado=0;

lista_m=lista_m.sort(function() {return Math.random()-0.5});
//iniciamos el juego
renderizar();

//creamos la funsión
function renderizar(){

    //obtenemos un elemento ramdon del array
    //seleccion=moleculas[Math.floor(Math.random()*moleculas.length)];
    seleccion=moleculas[lista_m[estado]];
    console.log("imagen: "+seleccion);
    document.getElementById("imagen").src="krebs/"+seleccion+".png";
    
    document.getElementById("div_buttons").innerHTML=``;
    
    for (let index = 0; index < moleculas.length; index++) {
    
        if(moleculas[index]==seleccion){
    
            document.getElementById("div_buttons").innerHTML+=`
    
        <button class="btn" id="btn_${index}" onclick='result(true,"btn_${index}")'>${moleculas[index]}</button>
        `;    
        }else{
            document.getElementById("div_buttons").innerHTML+=`
    
            <button class="btn" id="btn_${index}" onclick='result(false,"btn_${index}")'>${moleculas[index]}</button>
            `;    
        }
        
    }
}


function result(boolean, btn_id){
    
    if(boolean==true){
        
        document.getElementById(btn_id).style.backgroundColor="green";
        //enviamos una pantalla de felicitaciones!
        
        
        if(estado==10){
            estado=0;
            document.getElementById("id_body").innerHTML+=`

            <div class="correctoUp" id="correctoUp">
                Completaste toda la lección!!
            </div>
        `;
        }else{
            estado++
            document.getElementById("id_body").innerHTML+=`

            <div class="correctoUp" id="correctoUp">
                Correcto!
            </div>
        `;
        };
        document.getElementById("correctoUp").style.display="flex";
        setTimeout(() => {
            document.getElementById("correctoUp").style.display="none";
            renderizar();
        }, 2000);
        
    }else{
        document.getElementById(btn_id).style.backgroundColor="red";
        document.getElementById(btn_id).setAttribute('class','btn vibrar');
    }
    
    
}