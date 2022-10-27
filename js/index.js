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

let driverName = "";
let navigatorName = "";
for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName);

let i = hacker2.length;
while (i >= 1) {
  navigatorName += hacker2[i - 1];
  i--;
}
console.log(navigatorName);

//Bonus 1
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id orci orci. Sed pulvinar, lacus ac vulputate hendrerit, tortor mauris ultricies nisi, in euismod purus enim sit amet eros. Sed ullamcorper efficitur accumsan. Ut faucibus vel mauris id ullamcorper. Vivamus rutrum, eros ut euismod gravida, quam ligula laoreet tortor, a imperdiet neque sapien eu felis. Aenean mi nibh, pretium facilisis elementum at, porttitor eget enim. Phasellus non gravida metus. Donec nec ante sed dolor rhoncus rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque lacinia feugiat sem sed eleifend. Vivamus quis accumsan quam, eget pharetra lorem. Duis tincidunt, nisi sed commodo aliquam, massa risus suscipit tortor, pulvinar maximus nunc risus vel felis.

Morbi arcu sapien, auctor quis cursus ut, varius a diam. Vestibulum eget dolor a velit efficitur pretium. Sed semper scelerisque ligula, sed congue neque. Sed ullamcorper malesuada orci, ut commodo odio blandit ac. Suspendisse potenti. In volutpat dui nec iaculis efficitur. In hac habitasse platea dictumst. In lobortis mauris finibus viverra varius.

Suspendisse tincidunt blandit justo, posuere congue augue facilisis et. Quisque et elit velit. In quis maximus nibh, ut eleifend lacus. Nam posuere tincidunt mi eget efficitur. Duis rhoncus fringilla ipsum ut rutrum. In dapibus a nibh vitae rutrum. Maecenas sed risus in lectus consequat dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis diam leo, hendrerit sit amet ante eu, mollis sollicitudin ipsum. Morbi id congue eros. Cras interdum eget lectus eget dapibus. Nunc consequat mi vitae elementum ullamcorper.`;

//solution 1, split
console.log(lorem.split(" ").length);

//solution 2, for loop
let nbWords = 1;
for(let i=0; i<=lorem.length;i++){
    if(lorem[i]===" "){
        nbWords ++;
    }
}
console.log(nbWords)


//bonus 2
let phraseToCheck ="";

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

phraseToCheck = "A man, a plan, a canal, Panama!"
console.log(phraseIsPalindrome(phraseToCheck))