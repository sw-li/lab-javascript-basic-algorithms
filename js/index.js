// Iteration 1: Names and Input

let hacker1 = "Shengwei";
let hacker2 = "Omar";
console.log(hacker1);
console.log(hacker2);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has XX characters.");
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has XX characters."
  );
} else {
  console.log("Wow, you both have equally long names, XX characters!");
}

// Iteration 3: Loops
// 3.1
let driverName = "";
let navigatorName = "";
for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName);


//3.2
let i = hacker2.length;
while (i >= 1) {
  navigatorName += hacker2[i - 1];
  i--;
}
console.log(navigatorName);

//3.3

if(hacker1 < hacker2){
    console.log("hacker 1 before hacker2: " + hacker1 + " " + hacker2)
}else{
    console.log("hacker 2 before hacker1: " + hacker2 + " " + hacker1)
}

//Bonus 1
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id orci orci. Sed pulvinar, lacus ac vulputate hendrerit, tortor mauris ultricies nisi, in euismod purus enim sit amet eros. Sed ullamcorper efficitur accumsan. Ut faucibus vel mauris id ullamcorper. Vivamus rutrum, eros ut euismod gravida, quam ligula laoreet tortor, a imperdiet neque sapien eu felis. Aenean mi nibh, pretium facilisis elementum at, porttitor eget enim. Phasellus non gravida metus. Donec nec ante sed dolor rhoncus rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque lacinia feugiat sem sed eleifend. Vivamus quis accumsan quam, eget pharetra lorem. Duis tincidunt, nisi sed commodo aliquam, massa risus suscipit tortor, pulvinar maximus nunc risus vel felis.

Morbi arcu sapien, auctor quis cursus ut, varius a diam. Vestibulum eget dolor a velit efficitur pretium. Sed semper scelerisque ligula, sed congue neque. Sed ullamcorper malesuada orci, ut commodo odio blandit ac. Suspendisse potenti. In volutpat dui nec iaculis efficitur. In hac habitasse platea dictumst. In lobortis mauris finibus viverra varius.

Suspendisse tincidunt blandit justo, posuere congue augue facilisis et. Quisque et elit velit. In quis maximus nibh, ut eleifend lacus. Nam posuere tincidunt mi eget efficitur. Duis rhoncus fringilla ipsum ut rutrum. In dapibus a nibh vitae rutrum. Maecenas sed risus in lectus consequat dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis diam leo, hendrerit sit amet ante eu, mollis sollicitudin ipsum. Morbi id congue eros. Cras interdum eget lectus eget dapibus. Nunc consequat mi vitae elementum ullamcorper.`;

//loop solution to count 
let nbWords = 1;
for(let i=0; i<=lorem.length;i++){
    if(lorem[i]===" "){
        nbWords ++;
    }
}
console.log("For loop solution got the length: " + nbWords)


//Other wise we can trun the string into array
//Array solution 1 to get an array of works. split function

console.log("solution one get the length: " + lorem.split(" ").length);

//Array solution 2 to turn the phrase into array of strings

let arrLorem = [];

while(lorem.indexOf(" ") != -1){
    //remove space while adding to array. so that later it ill be easier to count "et"
    arrLorem.push((lorem.slice(0,lorem.indexOf(" ")+1)).replace(" ",""));
    lorem = lorem.slice(lorem.indexOf(" ")+1)
} 
arrLorem.push(lorem);

console.log("solution two get the length: " + arrLorem.length)

//clean the points and coma from arrLorem members

for(let i=0; i<arrLorem.length; i++){
    let newMember ="";
    for(let j=0; j<arrLorem[i].length; j++){
        if (charIsLetter(arrLorem[i][j])){
            newMember +=arrLorem[i][j]
        }
    }
}

//nomber of "et"

let nbOfEt =0;
for(let i=0;i<arrLorem.length;i++){
    if(arrLorem[i] == "et"){
        nbOfEt++;
    }
}

console.log(`number of "et" is: ` + nbOfEt);

//bonus 2


function charIsLetter(char){
    if(char.toUpperCase() != char.toLowerCase()){
        return true;
    }else{
        return false;
    }
}

function phraseToString(phrase){
    let output = "";
    for(let i=0; i<phrase.length; i++){
        if (charIsLetter(phrase[i])){
            output +=phrase[i]
        }
    }
    return output.toLowerCase();
}

function reverseString(stringToBeReversed){
    let output = "";
    for(let i=stringToBeReversed.length;i>0;i--){
        output += stringToBeReversed[i-1];
    }
    return output;
}

function phraseIsPalindrome(palindromeOrNot){
    let cleanString = phraseToString(palindromeOrNot);
    if(reverseString(cleanString) === cleanString){
        return true;
    }else{
        return false;
    }
}
let phraseToCheck = "A man, a plan, a canal, Panama!"

console.log("Is this phrase a palindrome?: "+ phraseIsPalindrome(phraseToCheck))

