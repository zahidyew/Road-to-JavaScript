var content = document.getElementById('main');

while (content.firstChild) 
    content.removeChild(content.firstChild);

function palindrome (theText) {
    theText = theText.toLowerCase();
    anArray = theText.split("");
    var middle = anArray.length/2;
    var number = 0;

    for (let i = anArray.length-1; i>middle-1; i--) {
        let temp = anArray[i];
        anArray[i] = anArray[number];
        anArray[number] = temp;
        number++;
    }

    //return anArray;
    var aString = anArray.toString().replace(/,/g, '');
    //aString = aString.replace(/,/g, '');

    if (aString == theText)
        var isPalindrome = "a palindrome.";
    else
        var isPalindrome = "not a palindrome.";
    return isPalindrome;
}

function pressed () {
    var text = document.getElementById('word').value;
    var ifPalindrome = palindrome(text);

    content.innerText = text + " is " + ifPalindrome;
}

var button = document.getElementById('submit');
button.disabled = false;
button.addEventListener('click', pressed);

document.onkeydown = function (key) {
    key = key || window.event;
    switch (key.which || key.keyCode) {
        case 13:
            pressed();
            break;
    }
}