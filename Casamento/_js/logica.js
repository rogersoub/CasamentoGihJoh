//CONTADOR
//vou primeiro subtrair os mili segundos da data futura menos a data atual
var dataFutura = new Date("February 15,2025 15:00").getTime();//pegando data futura
var meses,dias,horas,minutos,segundos;

setInterval(function(){
    var dataAtual = new Date().getTime();//pegando mile segundos da data atual

    var segundosTotal = (dataFutura-dataAtual)/1000;//temos os segundos que faltam
    
    meses = parseInt(segundosTotal/2592000);//meses recebe a parte inteira da divisão entre quantos segundos faltam e quantos segundos tem 1 mês
    segundosTotal = segundosTotal%2592000; //segundos total vai receber o restante que sobrar de meses

    dias = parseInt(segundosTotal/86400);
    segundosTotal = segundosTotal%86400;

    horas = parseInt(segundosTotal/3600);
    segundosTotal = segundosTotal%3600;

    minutos = parseInt(segundosTotal/60);
    segundos= parseInt(segundosTotal%60);//segundos já recebe a parte inteira do resto de minutos
    
    document.getElementById("meses").innerHTML = meses; //impressão na hora com o innerHTML
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

},1000);//colocando intervalo de 1000 milisegundos(1 segundo)


//FINAL CONTADOR






//COMEÇO OCULTADOR DE DIVS
function Tipo() {
    let Radiocon = document.getElementById("convidado");
    let Radiorep = document.getElementById("REScrianca");//pega os radio

    let Formcon = document.getElementById("confirma-convidado");
    let Formrep = document.getElementById("confirma-responsavel");//pega os formulario

    let Formc1 = document.getElementById("form-crianca1");

    Formcon.style.display = "none";
    Formrep.style.display = "none";//coloca os dois como none, primeiro que clicar aparece
    if (Radiocon.checked) {
        if (Formcon.style.display === "block") {
            Formcon.style.display = "none";
        } else if (Formcon.style.display === "none") {
            Formcon.style.display = "block";
        }
        Formrep.style.display = "none"; // Oculta o formulário de representante
        Formc1.style.display = "none";
    } else if (Radiorep.checked) {
        if(Formrep.style.display === "block"){
            Formrep.style.display = "none";
            Formc1.style.display = "none";
        } else if(Formrep.style.display === "none"){
            Formrep.style.display = "block";
            Formc1.style.display = "block";
        }
        Formcon.style.display = "none";
        
    } else {
        alert("erro, entre em contato com o desenvolvedor");
    }
}







//PARTE QUE COLOCAR REQUIRED
// Função para adicionar o atributo "required" aos inputs dentro de uma div
function addRequiredToInputs(containerId) {
    let container = document.getElementById(containerId);
    let inputs = container.querySelectorAll('.inputRequired');

    inputs.forEach(input => {
        input.setAttribute('required', 'required');
    });
}



// PARTE DE OCULTAR DIVS DE CRIANÇAS

//criança 2
let btnc2 = document.getElementById("addkid2");

btnc2.addEventListener("click", function(){ //botão teve o evento de click, gera uma função aleatória
    let Formc2 = document.getElementById("form-crianca2");
    Formc2.style.display = "block";
    addRequiredToInputs("form-crianca2");

});

//criança 3
let btnc3 = document.getElementById("addkid3");

btnc3.addEventListener("click", function(){
    let Formc3 = document.getElementById("form-crianca3");
    Formc3.style.display = "block";
    addRequiredToInputs("form-crianca3");

});

//criança 4
let btnc4 = document.getElementById("addkid4");

btnc4.addEventListener("click", function(){
    let Formc4 = document.getElementById("form-crianca4");
    Formc4.style.display = "block";
    addRequiredToInputs("form-crianca4");

});

//criança 5
let btnc5 = document.getElementById("addkid5");

btnc5.addEventListener("click", function(){
    let Formc5 = document.getElementById("form-crianca5");
    Formc5.style.display = "block";
    addRequiredToInputs("form-crianca5");

});