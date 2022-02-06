var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        batido();
        licuadora.classList.add("active");
        /* console.log("me prendiste"); */
    } else {
        estadoLicuadora = "apagada";
        batido();
        licuadora.classList.remove("active");
        /* console.log("me apagaste") */
    }
}

function batido() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play()
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}