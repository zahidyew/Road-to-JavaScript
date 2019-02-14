var content = document.getElementById('main');
while (content.firstChild)
    content.removeChild(content.firstChild);

function countVowel (word) {
    var word = word.toLowerCase();
    var anArray = word.split("");
    var totals = 0;

    for (let i=0; i<word.length; i++) {
        if (anArray[i] == 'a' || anArray[i] == 'e' || anArray[i] == 'i' || anArray[i] == 'o' || anArray[i]=='u')
            totals++;
    }
    return totals;
}

function pressed() {
    var originalWord = document.getElementById('word').value;
    var amountOfVowels = countVowel(originalWord);

    content.innerText = originalWord + " has " + amountOfVowels + " vowel(s).";
}

var button = document.getElementById('submit');
button.disabled = false;
button.addEventListener("click", pressed);

document.onkeydown = function (key) {
    key = key || window.event;
    switch (key.which || key.keyCode) {
        case 13: //13 is ASCII for Enter
            pressed();
            break;
    }
}