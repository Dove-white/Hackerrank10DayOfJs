// A function to return the number of times the button is being click.

let button = document.getElementById('btn');
button.innerHTML = 0;

button.onclick = function() {
    button.innerHTML++;
}