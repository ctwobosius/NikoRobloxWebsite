document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('bgm').play();
    document.removeEventListener('click', musicPlay);
}

String.prototype.format = function () {
    // store arguments in an array
    var args = arguments;
    // use replace to iterate over the string
    // select the match and check if related argument is present
    // if yes, replace the match with the argument
    return this.replace(/{([0-9]+)}/g, function (match, index) {
      // check if the argument is present
      return typeof args[index] == 'undefined' ? match : args[index];
    });
  };

var submit=document.getElementById("submit");
var userInput=document.getElementById("userInput");
var curInput

var madlibText=document.getElementById("madlibText");
var typeoOfWord=document.getElementById("typeOfWord");

// Burgers were made by …… <br> Burgers are a lot like….. And taste like….. The average fast food…..
// has …
// types on the menu. <br>
// The average person (emotion) burgers. And likes (food) more.<br>
// Did you Know that Burgers were made in (country)<br>

var madlib = [
    ["Burgers were made by {0}", "Person","GREEN"],
    ["Burgers are a lot like {0}", "Noun","ORANGE"],
    ["And taste like {0}","Food","RED"],
    ["The average fast food restaurant {0}", "Location","YELLOW"],
    ["has {0} types of burgers on the menu ", "number","BLUE"],
    ["The average person {0}  burgers ",  "(emotion)","CYAN"],
    ["And likes {0} more  ",  "food","PURPLE"],
    ["Did you Know that Burgers were made in country {0}",  "country","WHITE"]
];

var i = 0;
var j = 1;
function on_click(){
    // if we run malib 1 time
    if (madlib.length == i) {
        //stop
        return;
    }

    curInput=userInput.value;
    // change entire text to "Burgers Burgers were made by ……"
    var color = madlib[i][2];
    madlibText.innerHTML += " <FONT COLOR=\"" + color + "\">" +  madlib[i][0].format(curInput) + "</FONT> \r\n";
    
    if (j < madlib.length) {
        typeoOfWord.textContent = madlib[j][1];
    }
    
    
    i+=1;
    j+=1;
}

submit.onclick = on_click;