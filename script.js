const wordPlace = document.getElementById("wordPlace");
const lettersContainer = document.getElementById("lettersContainer");
const resultField = document.getElementById("resultField");
let wordList = getWordList();
displayWord(wordList[0]);

function getWordList() {
    return ["alphA", "bEta", "gaMma"]
}

function displayWord(word) {
    wordPlace.innerText = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        let button = document.createElement("button");
        button.innerText = word.charAt(i).toLowerCase();
        if (word.charAt(i).toLowerCase() == word.charAt(i)) { // in lower case
            button.onclick = () => {
                resultField.style = "color:red";
                resultField.innerHTML = "Wrong answer";
                
            }
        }else{
            button.onclick = () => {
                resultField.style = "color:green";
                resultField.innerHTML = "Correct answer";
            }
        }
        lettersContainer.appendChild(button);
    }
}
