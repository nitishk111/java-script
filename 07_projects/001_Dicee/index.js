function randomGen(){
     return Math.floor(Math.random()*6+1);
}

function whoWon(){
    var x= randomGen();
    var y= randomGen();

    if(x>y){
        var p="Player 1 Won!";
    }else if(y>x){
        var p="Player 2 Won!";
    }else{
        var p="Its draw";
    }
    document.getElementsByClassName("img1")[0].src="./images/dice"+x+".png";
    document.getElementsByClassName("img2")[0].src="./images/dice"+y+".png";
    var d=document.getElementsByTagName("p")[0].innerText=p;

}