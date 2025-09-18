const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  const res = document.querySelector("#results");
  if (!height || !weight || height === 0 ||height<0 || weight<0 || weight === 0) {
    res.innerText ="Not a good input value"
    // res.appendChild(document.createTextNode("Not a good value"));
  } else {
    const bmi = weight*10000 / (height*height);
    res.innerText = bmi;
    // res.appendChild(document.createTextNode(bmi));
  }
});
