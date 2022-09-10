var rellax = new Rellax ('.rellax');

var count=1;

function rightProject(){
    SetCounter();
    count++;
    if(count>5){
        count=1;
    }
    document.getElementById("radio" + count).checked = true;
}

function leftProject(){
    SetCounter();
    count--;
    if(count<=0){
        count=5;
    }
    document.getElementById("radio" + count).checked = true;
}

function SetCounter(){
    if(document.getElementById("radio1").checked==true){
        count=1;
    }
    if(document.getElementById("radio2").checked==true){
        count=2;
    }
    if(document.getElementById("radio3").checked==true){
        count=3;
    }
    if(document.getElementById("radio4").checked==true){
        count=4;
    }
    if(document.getElementById("radio5").checked==true){
        count=5;
    }
}