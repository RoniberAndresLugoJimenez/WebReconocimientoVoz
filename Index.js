const btnSartRecord = document.getElementById('btnStartRecord');
const btnStartStop = document.getElementById('btnStartStop');
const btnStartReproducir = document.getElementById('playText');
const texto = document.getElementById('texto');

let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (event) =>{
    const results = event.results;
    const resultado = results[results.length-1][0].transcript;
    texto.value += resultado;
}

recognition.onend = (event)=>{
    alert('El microfono dejo de escuchar');
}

btnSartRecord.addEventListener('click', ()=>{
    recognition.start();
});

btnStartStop.addEventListener('click', ()=>{
    recognition.stop();
});

const leerTexto = (texto)=>{
    const speech = new SpeechSynthesisUtterance();
    speech.text = texto.value;
    speech.volume = 1;
    speech.rate = 0.8;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

btnStartReproducir.addEventListener('click',()=>{
    leerTexto(texto);
});