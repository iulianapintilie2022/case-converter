function upperCase() {
    document.getElementById("user-text").value =
        document.getElementById("user-text").value.replace(/[\s]+/g, " ").toUpperCase();
}

function lowerCase(){
    let first = document.getElementById("user-text").value.trim();
    let second = first.toLowerCase();
    let last = second.replace(/[\s]+/g, " ");
    document.getElementById("user-text").value = last;
}

function properCase() {
    let original = document.getElementById("user-text").value.toLowerCase();
    let finalWords = proper(original);
    document.getElementById("user-text").value = finalWords;
}

function sentenceCase() {
    let first = document.getElementById("user-text").value.trim();
    let second = first.toLowerCase();
    document.getElementById("user-text").value = second;
    //get to sentenceCase
    let original2 = document.getElementById("user-text").value;
    document.getElementById("user-text").value = foo(original2);
}

function proper(original) {
    let second = original.replace(/[\s]+/g, " ").trim();
    let finalWord = second.split(" ").map(x => {
        let cleanWords = x;
        let firstLetter = cleanWords.charAt(0).toUpperCase();
        let restWord = cleanWords.slice(1);
        let finalWord = `${firstLetter}${restWord}`;
        return finalWord;
    });
    let finalWords = finalWord.join(' ');
    return finalWords;
}

function foo(original2) {
    let second = original2.replace(/[\s]+/g, " ").trim();
    let finalSentences = second.split('. ').map(entry => {
        let cleanSentence = entry;
        let firstLetter = cleanSentence.charAt(0).toUpperCase();
        let restOfSentence = cleanSentence.slice(1);
        let finalSentence = `${firstLetter}${restOfSentence}`;
        return finalSentence;
    });
    let finalText = finalSentences.join('. ');
    return finalText;
}

function save(){
    let text = document.getElementById("user-text").value;
    let filename = "text.txt"
    download(filename, text);
}
function download(filename, text){
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}