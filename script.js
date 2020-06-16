const wordPlace = document.getElementById("wordPlace");
const lettersContainer = document.getElementById("lettersContainer");
const resultField = document.getElementById("resultField");
const wrongAnswerPlace = document.getElementById("wrongAnswerPlace");
let wordList = getWordList();
let current = 0;
displayWord(wordList[current]);

function getWordList() {
    return ["alphA", "bEta", "gaMma"]
}

function displayWord(word) {
    console.log(word);
    wordPlace.innerText = word.toLowerCase();
    lettersContainer.innerHTML = "";
    for (let i = 0; i < word.length; i++) {
        let button = document.createElement("button");
        button.innerText = word.charAt(i).toLowerCase();
        if (word.charAt(i).toLowerCase() == word.charAt(i)) { // in lower case
            button.onclick = () => {
                resultField.style = "color:red";
                resultField.innerHTML = "Wrong answer";
                addNewError(word);
                current = (current + 1) % wordList.length;
                displayWord(wordList[current]);
            }
        } else {
            button.onclick = () => {
                resultField.style = "color:green";
                resultField.innerHTML = "Correct answer";
                current = (current + 1) % wordList.length;
                displayWord(wordList[current]);
            }
        }
        lettersContainer.appendChild(button);
    }
}

function addNewError(word) {
    let child = document.createElement("p");
    child.innerText = word;
    wrongAnswerPlace.appendChild(child);
}
