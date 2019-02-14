var content = document.getElementById("main");
while (content.firstChild)
    content.removeChild(content.firstChild);

/* var element1 = document.createElement("input");
var element2 = document.createElement("button");
var element3 = document.createElement("br");

element1.type = 'text';
element1.id = '';
element1.placeholder = 'text';

element2.innerText = 'Reverse';
element2.id = '';

content.appendChild(element1);
content.appendChild(element3);
content.appendChild(element2); */

function reverse (word) {
    let anArray = word.split("");
    let mid = anArray.length/2;
    let front = 0;

    for (let i = anArray.length; i>mid; i--) {
        let temp = anArray[i-1];
        anArray[i-1] = anArray[front];
        anArray[front] = temp;
        front++;
    }
    return anArray;
}

function pressed() {
    
    var originalWord = document.getElementById("word").value;
    var value = reverse(originalWord);
    var val = value.toString();
    var val2 = val.toLowerCase();

    content.innerText = originalWord + " reversed becomes ";

    var newContent = document.createTextNode(val2.replace(/,/g, ''));
    content.appendChild(newContent);
}

var button = document.querySelector('#submit');
button.disabled = false;
button.addEventListener("click", pressed);

document.onkeydown = function (key) {
    key = key || window.event;
    switch (key.which || key.keyCode) {
        case 13 : //13 is ASCII for Enter
            pressed();
            break;
    }
}



/*     < input type = "text" id = "word" placeholder = "text" >
        <br>
            <button type="button" value="Submit" id="submit">Reverse</button>  */





