const enzimas=["citrato_sintasa","aconitasa","isocitrato deshidrogenasa","alfa_cetoglutarato_deshidrogenasa","succinil_CoA_sintetasa","succinato_deshidrogenasa","fumarasa","malato_deshidrogenasa",];

const moleculas=["Acetil_CoA","citrato","cis_aconitato","isocitrato","alfa_cetoglutarato","succinil_CoA","succinato","fumarato","malato","oxalacetato"];

var bolean_molecula1=false;
var bolean_enzima=false;
var bolean_molecula2=false;
var estado=0;

var lista_m=[0,1,2,3,4,5,6,7,8,9];
var lista_e=[0,1,2,3,4,5,6,7,8];

cargarProceso(estado);

function cargarProceso(count){
        
        document.getElementById("img").innerHTML=`
        
        <div class="column" id="column1" onclick='selectMolecula(1,${count})'>
             
            <img src="krebs/${moleculas[count]}.png" alt="" id="imagen">
            <span class="texto" id="name_molecula1">Nombre 1</span>
        </div>

        <div class="column" id="columnP" onclick='selectProceso(${count})'>
            <span class="arrow"></span>
            <span class="texto" id="name_enzima">Enzima</span>
        </div>

        <div class="column" id="column2" onclick='selectMolecula(2,${count+1})'>
             
            <img src="krebs/${moleculas[count+1]}.png" alt="" id="imagen">
            <span class="texto" id="name_molecula2">Nombre 2</span>
        </div>
        
        `;
    
}

//renderiza las opciones en el div id="div_buttons"
function selectMolecula(cual,correcta){
    //creamos el border de seleccion
    if(cual==1){
        document.getElementById("column1").style.border="2px solid red";
        document.getElementById("column2").style.border="none";
        document.getElementById("columnP").style.border="none";
    }else{
        document.getElementById("column2").style.border="2px solid red";
        document.getElementById("column1").style.border="none";
        document.getElementById("columnP").style.border="none";
    }
    
    //limpiamos el div
    document.getElementById("div_buttons").innerHTML=``;

    //renderizamos los botones
    
    lista_m=lista_m.sort(function() {return Math.random()-0.5});
    for (let index = 0; index < lista_m.length; index++) {
        
        if(lista_m[index]==correcta){
            document.getElementById("div_buttons").innerHTML+=`
            <buttons class="btn" id="btn${lista_m[index]}" onclick="selectBtn(${cual},true,${correcta})">${moleculas[lista_m[index]]}</buttons>
        `;
    
        }else{
        document.getElementById("div_buttons").innerHTML+=`
            <buttons class="btn" id="btn${lista_m[index]}" onclick="selectBtn(${cual},false,${lista_m[index]})">${moleculas[lista_m[index]]}</buttons>
        `;
        }   

    }
}
function selectProceso(correcta){
    //creamos el border de seleccion
    
      document.getElementById("columnP").style.border="2px solid red";
      document.getElementById("column1").style.border="none";
      document.getElementById("column2").style.border="none";
  
      //limpiamos el div
  document.getElementById("div_buttons").innerHTML=``;

  //renderizamos los botones
  lista_e=lista_e.sort(function() {return Math.random()-0.5});

  for (let index = 0; index < lista_e.length; index++) {
      
      if(lista_e[index]==correcta){
          document.getElementById("div_buttons").innerHTML+=`
          <buttons class="btn" id="btn${lista_e[index]}" onclick="selectBtnP(true,${correcta})">${enzimas[lista_e[index]]}</buttons>
      `;

      }else{
      document.getElementById("div_buttons").innerHTML+=`
          <buttons class="btn" id="btn${lista_e[index]}" onclick="selectBtnP(false,${lista_e[index]})">${enzimas[lista_e[index]]}</buttons>
      `;
      }
  
  }

}




function selectBtn(cual,bolean, num){

    if(bolean==true){

        document.getElementById("name_molecula"+cual).innerText=moleculas[num];
        document.getElementById("btn"+num).setAttribute('class','btncorrecto vibrar');
        document.getElementById("name_molecula"+cual).style.color="green";
        cual==1? bolean_molecula1=true:bolean_molecula2=true;
        validar();

    }else if((bolean_molecula1==false)&&(cual==1)||(bolean_molecula2==false)&&(cual==2)){

        document.getElementById("name_molecula"+cual).style.color="red";
        document.getElementById("btn"+num).setAttribute('class','btnIncorrecto vibrar');
        cual==1? bolean_molecula1=false :bolean_molecula2=false;
    }
    
}

function selectBtnP(bolean, num){
    if(bolean==true){
        document.getElementById("name_enzima").innerText=enzimas[num];
        document.getElementById("name_enzima").style.color="green";
        document.getElementById("btn"+num).setAttribute('class','btncorrecto vibrar');
        bolean_enzima=true;
        validar();
    }else if (bolean_enzima==false){
        document.getElementById("btn"+num).setAttribute('class','btnIncorrecto vibrar');
        document.getElementById("name_enzima").style.color="red";
        bolean_enzima=false;
    }
    
}



function validar(){
    if((bolean_molecula1==true)&&(bolean_molecula2==true)&&(bolean_enzima==true)){
    
        //realizamos el banner que indica que se pasa a la siguiente reaccion!
               
        correctoup();
       
    }
}
function correctoup(){
    
    if(estado==9){
        
        document.getElementById("id_body").innerHTML+=`

        <div class="correctoUpP" id="correctoUp" onclick="continuar()">
            Correcto!,Ejercicio Completado!
        </div>
        `;
        
    }else{
        document.getElementById("id_body").innerHTML+=`

        <div class="correctoUpP" id="correctoUp" onclick="continuar()">
            Correcto!,vamos a la siguiente reacción!
        </div>
        `;
    }
    document.getElementById("correctoUp").style.display="flex";
  
}

function continuar(){

    if(estado==9){
        
        document.getElementById("correctoUp").style.display="none";
        
        //reseteamos las variables de control
        bolean_molecula1=false;
        bolean_molecula2=false;
        bolean_enzima=false;
        //con esto reiniciamos el juego
        estado=0;
        cargarProceso(estado);
        document.getElementById("div_buttons").innerHTML="";
        
        document.getElementById("reaccion").innerText="Reacción "+(estado+1);
    }else{

        document.getElementById("correctoUp").style.display="none";
        
        //reseteamos las variables de control
        bolean_molecula1=false;
        bolean_molecula2=false;
        bolean_enzima=false;
        
        //sumamos 1 a la variable estado
        estado++;
        //cargamos la siguiente reacción
        cargarProceso(estado);
        document.getElementById("div_buttons").innerHTML="";
    
        document.getElementById("reaccion").innerText="Reacción "+(estado+1);
    }

}