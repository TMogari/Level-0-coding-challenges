// finding all the vowels in a string passed it
function allVowels(word){
  word = word.toLowerCase();
  let vow = "";
  for(let i = 0; i < word.length; i++){
    if(word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u'){
      vow = vow + word[i];
    }
  }
  console.log("Vowels: " + vow);
}

allVowels('Tshegofatso');
