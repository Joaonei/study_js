let timer;

function comecar() {
    timer = setInterval(showTime, 1000);

}
function terminar() {
clearInterval(timer)

}




function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = `${h} : ${m} : ${s}`

    document.querySelector('.demo').innerHTML = txt;
}

// clearTimeOut Para antes de rodar
document.querySelector('.comecar').addEventListener('click', comecar )
document.querySelector('.terminar').addEventListener('click',terminar )
