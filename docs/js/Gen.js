// scan text
var vw = document.getElementById('voweled word');
var gen = document.getElementById('gen');

function on_click() {
    alert(vw.value.replace(/[aiuAIU]/g, ""));

}

gen.onclick = on_click;

// find vowels
// replace vowels