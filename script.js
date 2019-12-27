var i = 0, n=0, aux, aux2;
var speed = 50;


function frase(){
    txt = Math.random() * 100;
    if(txt > 0 && txt < 10)
        txt = "Acredite!";
    else if(txt > 10 && txt < 20)
            txt = "1 é tudo, tudo é 1!";
        else if(txt > 20 && txt < 30)
                txt = "Obrigada por calcular!";
            else if(txt > 30 && txt < 40)
                    txt = "Tenha um ótimo dia!";
                else if(txt > 40 && txt < 50)
                        txt = "Sorria!!";
                    else if(txt > 50 && txt < 60)
                            txt = ":D";
                        else if(txt > 60 && txt < 70)
                                txt = "Você é incrível!!";
                            else if(txt > 70 && txt < 80)
                                    txt = "Foco, força e fé!";
                                else if(txt > 80 && txt < 90)
                                        txt = "42 é a resposta!";
                                    else    
                                        txt = "Esse é meu jeito ninja!!";

}

function insertEspecial(){
    i=0;
    document.form.view.value = "";
    aux2 = frase();
    typeWrite(aux2);

    aux = document.getElementsByClassName("nor");
    for(n = 0; n < aux.length; n++){
        document.getElementsByClassName("nor")[n].classList.add("locked");
        document.getElementsByClassName("nor")[n].disabled = true;
        document.getElementsByClassName("nor")[n].pointer = false;
    }
    aux = document.getElementsByClassName("spc");
    for(n = 0; n < aux.length; n++){
        document.getElementsByClassName("spc")[n].classList.add("locked");
        document.getElementsByClassName("spc")[n].disabled = true;
        document.getElementsByClassName("spc")[n].pointer = false;
    }
}
function clean(){
    document.form.view.value = "";

    aux = document.getElementsByClassName("nor");
    for(n = 0; n < aux.length; n++){
        document.getElementsByClassName("nor")[n].classList.remove("locked");
        document.getElementsByClassName("nor")[n].disabled = false;
        document.getElementsByClassName("nor")[n].pointer = true;
    }
    aux = document.getElementsByClassName("spc");
    for(n = 0; n < aux.length; n++){
        document.getElementsByClassName("spc")[n].classList.remove("locked");
        document.getElementsByClassName("spc")[n].disabled = false;
        document.getElementsByClassName("spc")[n].pointer = true;
    }
}
function typeWrite() {
    if (i < txt.length) {
        document.form.view.value += txt.charAt(i);
        i++;
        setTimeout(typeWrite, speed);
    }
}
function typeText(e){
	const txt = e.innerHTML.split('');
	e.innerHTML = '';
	txt.forEach((letra, i) => {
		setTimeout(() => e.innerHTML += letra, 75 + i);
    });
}
function insert(num){
    document.form.view.value = document.form.view.value+num;
}
function equal(){
    var exp = document.form.view.value;
    if(exp){
        document.form.view.value = eval(exp);
    }
}
function back(){
    var exp = document.form.view.value;
    document.form.view.value = exp.substring(0,exp.length-1);
}
