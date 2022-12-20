const enzimas=["Hexoquinaza","Fosfogluco isomerasa","Fosfofructo quinasa","Fructosa bisfosfato aldolasa","Triosa-fosfato isomerasa","Gliceraldehido fosfato deshidrogenasa","Fosfogliceratoquinasa","Fosfoglicerato mutasa","Enolasa","Piruvato quinasa"];
var correcto=0;
//BORRAR
enzimas.forEach((element) => {
    document.getElementById("lista_enzimas").innerText+="[";
    for (let i = 0; i < 3; i++) {
    
        document.getElementById("lista_enzimas").innerText+='"'+element+"=texto"+i+'"'+",";
        console.log();    
        
    }
    document.getElementById("lista_enzimas").innerText+="],";
    
});


//para practicar
//lista con numeros de la ubicaciones del array (para los btn)
var lista_enzimas=[0,1,2,3,4,5,6,7,8,9];
//lista con numeros de la ubicaciones del array (para los textos)
var orden_enzimas=[0,1,2,3,4,5,6,7,8,9];
//desordenamos el orden del juego para que sea diferente en cada inicio de la página
orden_enzimas=orden_enzimas.sort(function() {return Math.random()-0.5});

//arrancampo el juego con...
seleccion=Math.floor(Math.random()*enzimas.length);
//push game
var push=0;

var enzima_descripcion=[
    //hexoquinasa
    ["Consume 1 ATP",
    "Cataliza una reacción irreversible AG=" ,
    "La fosforilación de la glucosa impide que salga de la célula",
    "Tiene una isoenzima: GLUCOQUINAZA presente en el HIGADO y en los islote de langerhans (PANCREAS)",
    "Estas isoenzimas difieren en el lugar de ubicacion"    
],
    //fosfogluco Isomerasa
    [
        "Participa tanto en la glucólisis como en la gluconeogénesis",
        "Cataliza la isomerización reversible de la glucosa-6-fosfato a fructosa-6-fosfato",
        "Requiere Mg2+ 0 Mn2+"
    
    ],

    //fosfofructo quinasa
    [
        "Fosforila el carbono 1 de la fructuosa 6 fosfato",
        "Reacción Ireversible",
        "Es una enzima ALOESTERICA",
        'Regula la "glucolisis"',
        "Su inhibición depende de las concentraciones de ATP en el citoplasma",
        "Requiere ATP y Mg 2+"
    ],
    //fructosa bifosfato Aldolasa
    [
        "Ocurre la formación de TRIOSAS",
        "reacción reversible",
        "ruptura de la fructosa 1,6 bifosfato"
    ],
    //triosa fosfato isomerasa
    [
        "convierte la DIHIDROXIACETONA 3 FOSFATO en GLICERHALDEHIDO 3 FOSFATO",
        
    ],
    //gliceraldehido deshidrogenasa
    [
        "Ocurre la oxídación del gliceraldehido 3 fosfato",
        "Se reduce 1 NAD+ en NADH+H+",
        "Interviene 1 grupo FOSFATO PO3-",
        "Se obtiene 1 3 BIFOSFOGLICERATO"
    ],
    //Fosfoglicerato quinasa
    [
        "el fosforilo es transferido a un ADP para formar ATP",
        "ESTA REACCIÓN MARCA LA PRIMERA GANANCIA ENERGETICA",
        "Se forma 3 fosfoglicerato"
    ],
    //Fosfoglicerato MUSTAS
    [
        "Ocurre la translocación de un grupo fosfato",
        "se obtiene 2 fosfoglicerato",
        "requiere Mg 2+"
    ],
    //ENOLASA
    [
        "Ocurre una deshidratación",
        "formación de una molecula de agua",
        "Formación de un doble enlace "
        
    ],
    //PIRUVATO QUINASA
    [
        
        "Formación de un grupo cetonico",
        "Un grupo fosfato es transferido a un ADP para formar ATP",
        "se obtiene una molécula de PIRUVATO"
    ]
    

                        ];
estudiar();

function estudiar(){

    //pintamos el btn
    document.getElementById("btn1").style.background="rgb(61, 139, 74)";
    document.getElementById("btn2").style.background="darkslateblue";

    document.getElementById("title").innerText='Caracteristicas de las enzimas';

    document.getElementById("lista_enzimas").innerHTML=``;
    enzimas.forEach((element,index) => {
        document.getElementById("lista_enzimas").innerHTML+=`
        
        <li><button class="btnVerde" onclick="verTextoEstudiar(${index})">${element}</button></li>
    
        `;
    });
    verTextoEstudiar(0);
}

function practicar(){
    //limpiamos el h3
    document.getElementById("titleEnzima").innerHTML="¿Que enzima es?";
    //pintamos los btn1 y btn2
    document.getElementById("btn2").style.background="rgb(61, 139, 74)";
    document.getElementById("btn1").style.background="darkslateblue";

document.getElementById("title").innerText='Caracteristicas de las enzimas '+correcto+"/10";

seleccion=orden_enzimas[push]
//mostramos el texto del array random y se debe elegir la enzima correcta

//mostramos el texto random que corresponde a una enzima
verTexto(seleccion);
//limpiamos "lista_enzimas" (lista de btns)
    document.getElementById("lista_enzimas").innerHTML=``;
    //desacomodamos el array de los btn
    lista_enzimas=lista_enzimas.sort(function() {return Math.random()-0.5});

    enzimas.forEach((element,index) => {
        if(seleccion==lista_enzimas[index]){
            //es la respuesta correcta
            document.getElementById("lista_enzimas").innerHTML+=`
            <li><button class="btn" id="btn${lista_enzimas[index]}" onclick="respuesta(${lista_enzimas[index]},true)">${enzimas[lista_enzimas[index]]}</button></li>
        `;
        }else{
  //es la respuesta Incorrecta
            document.getElementById("lista_enzimas").innerHTML+=`
            <li><button class="btn" id="btn${lista_enzimas[index]}" onclick="respuesta(${lista_enzimas[index]},false)">${enzimas[lista_enzimas[index]]}</button></li>
        `;
        }

    });

    push==(enzimas.length-1)?push=0:push++;
    console.log("push:"+push)
    console.log("tamaño"+enzimas.length);


}
function respuesta(id,bolean){
    if(bolean==true){

        document.getElementById("btn"+id).setAttribute('class','btncorrecto vibrar');
        correctoup();
        correcto==9?correcto=0:correcto++;

    }else{
        
        document.getElementById("btn"+id).setAttribute('class','btnIncorrecto vibrar');
    }
}

function verTexto(id){
console.log("id: "+id);

    document.getElementById("texto").innerHTML=``;

for (let index = 0; index < enzima_descripcion[id].length; index++) {
    
    document.getElementById("texto").innerHTML+=`

        <ul>
            <li>${enzima_descripcion[id][index]}</li>
        </ul>
    
    `;
}
    
}




function verTextoEstudiar(id){
    

    document.getElementById("titleEnzima").innerHTML=enzimas[id];
    
        
        document.getElementById("texto").innerHTML=``;
    
    for (let index = 0; index < enzima_descripcion[id].length; index++) {
        
        document.getElementById("texto").innerHTML+=`
    
            <ul>
                <li>${enzima_descripcion[id][index]}</li>
            </ul>
        
        `;
    }
        
    }
    


function correctoup(){
    
        
        document.getElementById("id_body").innerHTML+=`

        <div class="correctoUpP" id="correctoUp" onclick="continuar()">
        Correcto!,vamos a la siguiente !
        </div>
        `;
        
    document.getElementById("correctoUp").style.display="flex";
  
}

function continuar(){
    
        document.getElementById("correctoUp").style.display="none";
        
        practicar();

}