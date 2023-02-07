 function clicou() {
    //promisse = promessa
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(
        (response) => {
            return response.json();
        }
    )
    .then(
        (json) => {
            console.log(json[0].title)
        }
    ).catch(()=> {
        console.log("Deu Problema!")
    }
    )
    }

function inserir(){
    fetch ( 'https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: "titulo de teste",
            body:'corpo de teste',
            userId: 2
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((json) =>{
        console.log(json)
    })
}

document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir)
