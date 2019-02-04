


var count=0;
var typ= document.getElementById('typer');
var text= "Fuzzy wuzzy was a bear, fuzzy wuzzy had no hair, Fuzzy wuzzy wasn't very fuzzy was he?"
typ.onkeydown = function (e) {
    e.preventDefault();
    typ.value += text[count];
    count++

};