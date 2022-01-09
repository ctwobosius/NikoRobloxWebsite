var answer_button = document.getElementById('answer_button'); 
var radios = document.getElementsByTagName('input');

function on_click() {
    var value;

    // check answer
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = radios[i].value;
            alert(value);
        }
    }


    // if correct

    // say incorrect
}

// binding the on_click function to the button
answer_button.onclick = on_click;