// add whatever parameters you deem necessary & write doc comment
// create frequency counter of the word
// create frequency counter of the letters
// check to see if the word obj is in letters obj
function canConstructWord(word, letters) {
    if(letters === '') return false;
    if(word === '') return true;
   let wordFreq = frequencyCounter(word);
   let lettersFreq = frequencyCounter(letters);
   for(let letter in wordFreq){
       if(lettersFreq[letter] ){
           if(lettersFreq[letter] >= wordFreq[letter]){
               return true;
           }
       }
   }
   return false;
}

function frequencyCounter(word){
 const letterFrequency = {}
    for(let letter of word){
             let letterCount = letterFrequency[letter] || 0
             letterFrequency[letter] = letterCount + 1;
     
    }
    return letterFrequency;
}