
///
// uppercase & lowercase 2ta alada taile compare korbo kibabe ?
// just 2ta kei .tolowercase() / .toUppercase dea compare koren
//.tolowercase() aeta ki ? aeta pura string ke choto hater banai 
// .touppercase() opposite banai
// .tolowercase() / .toUppercase kokon lage ?
// user jokon login kore , tokon borohater ba choto hater dei username , tarpor sei kintu nei 
// kibabe kore , se 2ta varibale ke boro / choto kore deke den dokte dei
// Ex- 1
const subject = "Chemisty"
const Book = "chemisty"

if (subject.toLowerCase === Book.toLowerCase){ // 2ta variable string kei choto hater korse , ciele oppostie ta kore deken 
    console.log("porikkai fatai felbo");
}else{
    console.log("hudai prista ultai"); 
}

// output : hudai prista ultai : karon C , c 2ta js er kase aalada string 

// 

/// oneke somoy 2ta string comparison e lowercase/ uppercase bad e o arrekta problem hoi seta holo
// white space // so aeta aage o hote pare and whitespace pore o hote pare 
// white space samne hole trimStart() , picone hole trimEnd()\
// aar jodi cie overall samne picone dite aeto bar check korben na 
// taile use sobsomoy trim bass 
// Ex- 2

let Drink = "water " // trim() dewwate sob white space katce
let liquid = "  water"

if ( Drink.trim()=== liquid.trim()){
    console.log("pani ami kabo");
}else{
    console.log("vai trim koro joldi , pani kaite hobe");
}

// sumUP :
// 2ta string comparison e problem 1 : onek somoy lower and uppercase problem hoi , use koren both .touppercase()  othoba .tolowercase()
/// 2ta string comparison e problem 2 : onek somoy white space pore , samne whitespace porle use  koren     .trimStrat  aar picone porle use kore .trimEnd  aar jodi kono jamela na chan use koren .trim()