
// Button click
var index = document.querySelectorAll(".drum").length;
for (let i = 0; i < index; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        playSound(this.innerText);
        addAnimation(this.innerText);
    });
}

// Key Press
document.addEventListener("keypress", function(event){
    playSound(event.key);
    addAnimation(event.key);
})

function playSound(x){
switch (x) {
        case 'w':
            var s = new Audio("sounds/crash.mp3");
            s.play();
            break;
        case 'a':
            var s = new Audio("sounds/kick-bass.mp3");
            s.play();
            break;
        case 's':
            var s = new Audio("sounds/snare.mp3");
            s.play();
            break;
        case 'd':
            var s = new Audio("sounds/tom-1.mp3");
            s.play();
            break;
        case 'j':
            var s = new Audio("sounds/tom-2.mp3");
            s.play();
            break;
        case 'k':
            var s = new Audio("sounds/tom-3.mp3");
            s.play();
            break;
        case 'l':
            var s = new Audio("sounds/tom-4.mp3");
            s.play();
            break;
        default: 
            console.log("press right key Bro!");
    }
}

function addAnimation(key){
    var c= "."+key;
    
    document.querySelector(c).classList.add("pressed");
    setTimeout(function(){
         document.querySelector(c).classList.remove("pressed");
    }, 120);
}
