
// document.body
window.addEventListener('keypress', (e)=>{
    // console.log(e.key, e.keycode, e.code);
    

    document.querySelector("table").appendChild(addTableRow(e.key,e.code))
    

})

const addTableRow= (k, c)=>{
    if(c==="Space")
        k="Space"
    const tr= document.createElement("tr")
    const key= document.createElement("td")
    const code= document.createElement("td")
    key.innerText=k
    code.innerText= c
    tr.appendChild(key)
    tr.appendChild(code)

    console.log(tr)
    return tr
}