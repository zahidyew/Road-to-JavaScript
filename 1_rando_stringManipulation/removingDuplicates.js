var content = document.getElementById('main');
while (content.firstChild)
    content.removeChild(content.firstChild);

var button = document.getElementById('submit');
button.disabled = true;

var anArray = [1,2,3,1,1,2,5,6,7,5]; 
//var anArray = [1, 1,1,2,3,4,5,6,7,7]; 
var endPoint = anArray.length;
var noDuplicates = new Array;
var isDuplicate = false;

function removeDuplicates (anArray) {
    for (let i = 0; i < endPoint; i++) {
        for (let j = 1; j < endPoint; j++) {
            if (this.anArray[i] == this.anArray[j]) {
                if (j == endPoint-1)
                    this.anArray[j] = '';
                else
                    this.anArray[j] = this.anArray[j+1]; 

               // endPoint--;      
               // break;       
            }
        }
    }
    return this.anArray;
}

content.innerText = anArray + " after removing duplicates become " + removeDuplicates(anArray);