// makes the paragraphs
sadatay = function() {
    var output = '';
    var quantity = parseInt($('#quantity').val());

    for(var i = 0; i < quantity; i++) {
        var paragraph = '<p>'
        while (paragraph.length <= maxLength()) {
            var index = Math.floor(Math.random() * pootieTalk.length);
            paragraph += (' ' + pootieTalk[index]);
        };

        paragraph += '</p>';
        output += paragraph;
    }

    $('#output').html(output);
}

// creates randomized paragraph max length
maxLength = function() {
    var minLength = 250;
    var limit = 0.25;
    var randomLength = parseInt(Math.random() * limit * minLength) + minLength;
    return randomLength;
}

// page load
document.addEventListener('DOMContentLoaded', function() {
    sadatay();
    prependText();
}, false)

// on select change
function changeEventHandler(event) {
    sadatay();
}

// prepend text to first sentence
function prependText() {
    var firstSentence = document.querySelector("p:first-child");
    firstSentence.innerHTML = "Pootie Tang is too cool for words." + firstSentence.innerHTML;
}




//Pootie Talk: the array tht will populate the paragraphs

var pootieTalk = [
    "Sepatown!",
    "I gotta do it for the tippi tais.",
    "Wapatah to the bammies.",
    "Pootie love the tippi tais.",
    "Sadatay, my main damie.",
    "Pootie Tang don\'t wadacha to the shama cow.",
    "Biggie Shorty ain\'t a cole toni.",
    "That\'s a banu shane my tellie wada tah.",
    "On my damie kings.",
    "Clammy dees.",
    "Imma cry the pooster.",
    "Cama cama leepa-chaiii.",
    "I KAYED A BROTHER!",
    "Come back on the bettie tai.",
    "Bata shane.",
    "Imma shamie dame.",
    "Bad like netatai.",
    "Nay no to the shama cow.",
    "Sine yo pitty on the runny kine.",
    "DIRTY D, you Bammy lammy!",
    "Tippi tai on my capa-town.",
    "Mannatine bitty, all around my damie, shimmy na na na.",
    "Lipatine on my clammy dees, penatime on my damie kings.",
    "Bata shane my dillie.",
    "Lipatine.",
    "Shama cow.",
    "I dabe ba sammie.",
    "Cole me down on the panny sty.",
    "Rown on the crowny town.",
    "I\'m a baino danie.",
    "Flittie Tai.",
    "NOT THE TIPPI TAIS, NO!",
    "Flittie tai.",
    "Deri teri was all the dinie!",
    "There's a sine tippi in a classi-ti.",
    "Ranacan!",
    "That\'s a ranacan to the semachai."
];