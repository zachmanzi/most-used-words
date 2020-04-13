function generateMostUsedWordList() {
  var userInput = document.getElementById("inputText").value;
  userInput = userInput.toLowerCase();
  userInput = userInput.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()––|\n]/g, " ");
  userInput = userInput.replace(/\s{2,}/g, " ");
  userInput = userInput.split('\n').join(' ');
  var arrayOfWords = userInput.split(' ');
  var wordListObject = {};
  for (var i = 0; i < arrayOfWords.length; i++) {
    var currentWord = arrayOfWords[i];
    if (currentWord.length <= 2) {
      continue;
    }
    if (wordListObject[currentWord] === undefined) {
      wordListObject[currentWord] = 1;
    } else {
      wordListObject[currentWord]++;
    }
  }
  var sortable = [];
  for (var word in wordListObject) {
    sortable.push([word + ' - ', ' ' + wordListObject[word]]);
  }
  sortable.sort(function(a,b) {
    return b[1] - a[1];
  });
  for (var i = 0; i < sortable.length; i++) {
    sortable[i] += '<br />';
  }
  sortable = sortable.join('').split(',').join('');
  document.getElementById("result").innerHTML = sortable;
  return sortable;
}