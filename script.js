const nm = document.getElementById("nm").value
const senha = document.getElementById("senha").value

const HandleSubmit = (event) => {
event.preventDefault();
/* Inserir endpoint da API Sheet Monkey */
fetch("here", {
    method: "post", 
    headers:  {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }, 
    body: JSON.stringify({nm, senha}),

  })
}

document.querySelector("form").addEventListener("submit", HandleSubmit)
