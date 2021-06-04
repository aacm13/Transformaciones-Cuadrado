$( document ).ready(function() {
    console.log( "ready!" );
    setup();
});

function setup(){
    setZero();
    //scale
    $("#maxB1").click(function() {
        var input = parseInt($("#scaleInput").val());
        if(input == 5){
            alert("Limite");
        }else{
            scale(30, "+");
        }
        
    });
    $("#minB1").click(function() {
        var input = parseInt($("#scaleInput").val());
        if(input == 1){
            alert("Limite");
        }else{
            scale(30, "-");
        }
    });
    //rotation
    var rot = 0;
    $("#maxB2").click(function() {
        var input = parseInt($("#rotateInput").val());
        if(input == 5){
            alert("Limite");
        }else{
            rot = rot+90;
            rotateSquare(rot, "+");
        }
        
    });
    $("#minB2").click(function() {
        var input = parseInt($("#rotateInput").val());
        if(input == 1){
            alert("Limite");
        }else{
            rot = rot-90;
            rotateSquare(rot, "-");
        }
    });
    //translation
    $("#maxB3").click(function() {
        var input = parseInt($("#transInput").val());
        if(input == 5){
            alert("Limite");
        }else{
            translate(30, "+");
        }
        
    });
    $("#minB3").click(function() {
        var input = parseInt($("#transInput").val());
        if(input == 1){
            alert("Limite");
        }else{
            translate(30, "-");
        }
    });

}

function scale(r, sym){
    var h = $(".square").height();
    var w = $(".square").width();
    if(sym == "-"){
        h = h - r; 
        w = w - r; 
        var input = parseInt($("#scaleInput").val());
        input = input -1;
    }
    if(sym == "+"){
        h = h + r; 
        w = w + r; 
        var input = parseInt($("#scaleInput").val());
        input = input +1;
    }
    $(".square").height(h);
    $(".square").width(w);
    
    $("#scaleInput").val(input);
}

function translate(r, sym){
    var p = $(".square").position().left;
    //console.log(p);
    //$(".square").css("left", "100px");
    if(sym == "-"){
        p = p-r;
        var input = parseInt($("#transInput").val());
        input = input -1;
    }
    if(sym == "+"){
        p = p+r 
        var input = parseInt($("#transInput").val());
        input = input +1;
    }
    $(".square").css("left", p+"px");
    $("#transInput").val(input);
}

function rotateSquare(rot, sym){
    
    if(sym == "-"){
        var input = parseInt($("#rotateInput").val());
        input = input -1;
    }
    if(sym == "+"){
        var input = parseInt($("#rotateInput").val());
        input = input +1;
    }
    $(".square").css("transform", "rotate("+rot+"deg)");
    $("#rotateInput").val(input);
}
function setZero(){
    $("#scaleInput").val(1);
    $("#rotateInput").val(1);
    $("#transInput").val(1);
}