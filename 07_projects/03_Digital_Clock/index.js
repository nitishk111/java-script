const div = document.querySelector("#clock");
const time = () => {
  let time = new Date();
  div.innerHTML = time.toLocaleTimeString()
};

setInterval(time, 1000)

console.log(div);
