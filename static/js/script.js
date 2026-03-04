function relogio() {

    const today = new Date()

    hora = today.getHours();
    minuto = today.getMinutes();
    segundo = today.getSeconds();

    document.getElementById('hora').innerHTML = hora + " : "
    document.getElementById('minuto').innerHTML = minuto
    document.getElementById('segundo').innerHTML = " : " + segundo


    setTimeout(relogio, 1000);

}

function cronometer() {

    let hora = 23;
    let minuto = 59
    let segundo = 59;

    const timer = setInterval(() => {
        console.log(segundo);
        document.getElementById('cronometer').innerText  = hora + " : " + minuto + " : " + segundo

        segundo--;

        if (segundo == 0) {
            segundo = 59
            minuto = minuto -1
        }

        if (minuto == 0) {
        hora = hora - 1
        minuto = 59
    }

    }, 1000); 
}



