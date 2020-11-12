n=new Array
n[1]="muito fácil";
n[2]="fácil";
n[3]="médio";
n[4]="difícil";
n[5]="muito difícil";
n[6]="quase impossível";

nivel=1;
max=10;
Pensar();

function Pensar() {
    numero=Math.round(Math.random()*max);
    contador=0;
}

function Testar() {
    valor=document.form.chute.value;

    if(valor>max||valor<0||isNaN(valor)||valor=="") {
        alert('Deves escolher um valor numérico entre 0 e '+max);
    } else if(numero<valor) {
        contador++;
        alert('Estou a pensar num número que é MENOR que esse: '+valor);
    } else if(numero>valor) {
        contador++;
        alert('Estou a pensar num número que é MAIOR que esse: '+valor);
    }else {
        contador++;
        alert('Parabéns, conseguiste adivinhar, o número que estava a pensar era'+numero+', em'+contador+' tentativas.Agora vou pensar noutro número')
        if(contador<record[nivel]) {
            record[nivel]=contador;
            atualizar();
            alert('Tem um novo recorde no nível'+n[nivel]);
        }
        Pensar();
    }
    document.form.chute.value="";
    document.form.chute.focus();
    return false;
}

function mudar() {
    nivel=document.form.dificuldade.value;
    max=Math.pow(10,nivel);
    alert('Eu tinha pensado no número: '+numero+'. Agora no nível: '+n[nivel]+' escolha um número entre 1 e '+max);
    document.form.chute.focus();
    Pensar();
}

function record() {
    record=new Array;
    record[1]=record[2]=record[3]=record[4]=record[5]=record[6]=9999;
}

function atualizar() {
    document.form.n1.value=record[1];
    document.form.n2.value=record[2];
    document.form.n3.value=record[3];
    document.form.n4.value=record[4];
    document.form.n5.value=record[5];
    document.form.n6.value=record[6];
}