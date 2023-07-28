// content.js
document.addEventListener("click", function (event) {
    const target = event.target;
    const clickedChar = getClickedCharacter(event); // Get the clicked character
    const parentElement = event.target.parentElement;
    const textContent = parentElement.textContent;

    // Find the start index of the word
    let startIndex = textContent.lastIndexOf(' ', clickedChar.index) + 1;

    // Find the end index of the word
    let endIndex = textContent.indexOf(' ', clickedChar.index);

    if (endIndex === -1) {
        endIndex = textContent.length;
    }

    const clickedWord = textContent.slice(startIndex, endIndex);

    // Replace the clicked word with the new word
    const newWord = "Boof!!!"; // Replace with the word you want
    const newTextContent = textContent.slice(0, startIndex) + newWord + textContent.slice(endIndex);
    target.textContent = newTextContent;
});

function getClickedCharacter(event) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const clickedCharacter = range.startContainer.textContent[range.startOffset];
    const clickedIndex = range.startOffset;

    return {
        character: clickedCharacter,
        index: clickedIndex
    };
};