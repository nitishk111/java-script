
// const colors= ["red", "green", "blue", "yellow", "white", "black"]
// let i=0

const randColor= ()=>{
    const hex= '0123456789ABCDEF';
    let color= "#"
    for(let i =0; i<6; i++){
        color+=hex.charAt(Math.floor(Math.random() *16))
    }
    return color
}

const changeBkg= ()=> document.body.style.backgroundColor=randColor()
let interval;

document.querySelector("#start").addEventListener('click', ()=>{
    if(!interval) // this will save multiple interval
    interval = setInterval(changeBkg, 2000)
})

document.querySelector("#stop").addEventListener('click', ()=>{
  clearInterval(interval) ;  
  interval=null;
})