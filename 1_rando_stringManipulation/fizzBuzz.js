var content = document.getElementById('main');
while (content.firstChild)
    content.removeChild(content.firstChild);

var button = document.getElementById('submit');
button.disabled = true;

function fizzBuzz() {
    var anArray = new Array;
    var number = 1;

    for (let i=0; i<100; i++) {
        anArray[i] = number;
        number++;
        if (anArray[i] % 3 == 0 && anArray[i] % 5 == 0)
            anArray[i] = "FizzBuzz";
        if (anArray[i] % 3 == 0)
            anArray[i] = "Fizz"
        if (anArray[i] % 5 == 0)
            anArray[i] = "Buzz";
        anArray[i] = " " + anArray[i];
    }
    return anArray;
}

var printThis = fizzBuzz();
content.innerText = printThis;

