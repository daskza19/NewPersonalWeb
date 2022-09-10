var rellax = new Rellax ('.rellax');

var count=1;

function rightProject(){
    count++;
    if(count>5){
        count=1;
    }
    document.getElementById("radio" + count).checked = true;
}

function leftProject(){
    count--;
    if(count<=0){
        count=5;
    }
    document.getElementById("radio" + count).checked = true;
}