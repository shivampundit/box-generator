var count = 0;
var btn = document.getElementById('btn');
console.log(btn);

btn.addEventListener('click', greater);

function greater() {
    console.log('test')
    var number1 = document.getElementById('num1').value;
    var color = document.getElementById('color').value;

    for (let i = 0; i < number1; i++) {
        count++;
        var btn = document.createElement("button");
        btn.className = "btn1";
        btn.innerHTML = "new button " + count;
        btn.style = "background-color:" + (color) + ";"
        document.body.appendChild(btn);
    }
}