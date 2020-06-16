const wordPlace = document.getElementById("wordPlace");
const lettersContainer = document.getElementById("lettersContainer");
const resultField = document.getElementById("resultField");
const wrongAnswerPlace = document.getElementById("wrongAnswerPlace");
let wordList = getWordList();
let current = getPosition();
displayWord(wordList[current]);

function getWordList() {
    return ["вОвремя","добелА","дОверху","донЕльзя","дОнизу","дОсуха","завИдно","отдАв","начАвшись","начАв","закУпорив","балУясь","начАвший","нанЯвший","налИвший","налитА","нАжитый","нажитА","молЯщий","избалОванный","заселЁнный","заселенА","зАпертый","запертА","зАнятый","занятА","зАгнутый","довезЁнный","включЁнный","включЁн","балОванный","облИться","облилАсь","облегчИть","облегчИт","обзвонИть","обзвонИт","начАть","нАчал","началА","нАчали","насорИть","насорИт","нарвАть","нарвалА","налИть","налилА","накренИться","накренИтся","назвАться","назвалАсь","надорвАться","надорвалАсь","наделИть","наделИт","наврАть","навралА","лилАсь","лилА","лгалА","крАсться","крАлась","клЕить","клАсть","клАла","исчЕрпать","звонИм","звонИть","звонИшь","звонИт","звалА","заперЕться","заперлАсь","заперЕть","зперлА","зАняло","зАняли","занЯть","зАнял","занялА","закУпорить","жИться","жилОсь","ждалА","дозИровать","дозвонЯтся","дозвонИться","дозвонИтся","дождАться","дождалАсь","добрАться","добралАсь","добрАть","добралА","гнАться","гналАсь","гналА","вручИт","воссоздАть","воссоздалА","воспринЯть","воспринялА","ворвАться","ворвалАсь","влИться","влилАсь","взЯться","взялАсь","взялА","брАться","бралАсь","бралА","ловкА","кУхонный","красИвейший","красИвее","знАчимый","вернА","мЕстностей","пОчестей","чЕлюстей","новостЕй","лЕкторы","лЕкторов","лыжнЯ","кремЕнь","кремнЯ","крАны","корЫсть","кОнусы","кОнусов","сантимЕтр","децимЕтр","миллимЕтр","киломЕтр","квартАл","каталОг","монолОг","некролОг","Иксы","знАчимость","жалюзИ","еретИк","досУг","докумЕнт","договорЁнность","диспансЕр","дешевИзна","дефИс","граждАнство","вероисповЕдание","бухгАлтеров","бОроду","бАнты","аэропОрты"];

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
                current = getPosition();
                displayWord(wordList[current]);
            }
        } else {
            button.onclick = () => {
                resultField.style = "color:green";
                resultField.innerHTML = "Correct answer";
                current = getPosition();
                displayWord(wordList[current]);
            }
        }
        lettersContainer.appendChild(button);
    }
}

function addNewError(word) {
    let child = document.createElement("p");
    child.innerText = word;
    let x = wrongAnswerPlace.innerHTML;
    wrongAnswerPlace.innerHTML = "";
    wrongAnswerPlace.appendChild(child);
    wrongAnswerPlace.innerHTML+=x;

}

function getPosition(){
    return Math.floor(Math.random()*wordList.length);
}
