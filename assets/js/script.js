document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('mensaje').value;

    if (name && email && message) {
        document.getElementById('response').textContent = alert('¡Gracias, ' + name + '! Hemos recibido tu mensaje.');
    } else {
        document.getElementById('response').textContent = alert('Por favor, completa todos los campos.');
    }
    location.reload();
});

function animateText(textArea) {
    let text = textArea.value;
    let to = text.length,
    from = 0;

animate({
    duration: 5000,
    timing: bounce,
    draw: function(progress) {
    let result = (to - from) * progress + from;
    textArea.value = text.slice(0, Math.ceil(result))
    }
});
}

function bounce(timeFraction) {
for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
    return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
}
}