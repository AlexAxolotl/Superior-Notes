document.getElementById('note').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default behavior of the Enter key
        createNewParagraph();
    } else {
        colorizeText();
    }
});

function colorizeText() {
    var noteContent = document.getElementById('note').innerText;
    var coloredText = '';

    for (var i = 0; i < noteContent.length; i++) {
        if (noteContent[i] === noteContent[i].toUpperCase()) {
            coloredText += '<span class="uppercase">' + noteContent[i] + '</span>';
        } else {
            coloredText += '<span class="lowercase">' + noteContent[i] + '</span>';
        }
    }

    document.getElementById('note').innerHTML = coloredText;
    placeCaretAtEnd(document.getElementById('note'));
}

function createNewParagraph() {
    var note = document.getElementById('note');
    var paragraph = document.createElement('p');
    paragraph.innerHTML = '<br><br>'; // Use two line breaks to start a new paragraph with an empty line
    note.appendChild(paragraph);
    placeCaretAtEnd(paragraph);
}


// Function to place the caret at the end of the contenteditable element
function placeCaretAtEnd(el) {
    var range = document.createRange();
    var sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    el.focus();
}

