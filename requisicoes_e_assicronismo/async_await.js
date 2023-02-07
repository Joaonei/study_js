async function clicou(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json();
    alert(`Titulo do primeiro post é: "${json[0].title}"`)
    alert('CLICOU!')    
}
document.querySelector('#botao').addEventListener('click', clicou)