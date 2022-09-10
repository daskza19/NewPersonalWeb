var rellax = new Rellax ('.rellax');

let count=1;
var timer = 2000;
document.getElementById("radio1").checked=true;

mainInterval();
function mainInterval(){
    SetCounter();
    nextImage();
    setTimeout(mainInterval, timer);
}

function nextImage(){
    count++;
    if(count>5){
        count=1;
    }
    document.getElementById("radio"+count).checked=true;
}

function SetCounter(){
    if(document.getElementById("radio1").checked==true){
        if(count!=1){
            count=1;
            timer=15000;
        }
        else{
            timer = 7000;
        }
    }
    if(document.getElementById("radio2").checked==true){
        if(count!=2){
            count=2;
            timer=15000;
        }
        else{
            timer = 7000;
        }
    }
    if(document.getElementById("radio3").checked==true){
        if(count!=3){
            count=3;
            timer=15000;
        }
        else{
            timer = 7000;
        }
    }
    if(document.getElementById("radio4").checked==true){
        if(count!=4){
            count=4;
            timer=15000;
        }
        else{
            timer = 7000;
        }
    }
    if(document.getElementById("radio5").checked==true){
        if(count!=5){
            count=5;
            timer=15000;
        }
        else{
            timer = 7000;
        }
    }
}