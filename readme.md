
        Know the String   <start>
=================================================
/// string declare korar system <br>
<br>
<br>
const Country = "Bangladesh" ; // sobsomoy use<br>
const division = `Dhaka` /// powerful string<br>
 const thana = new String ("Tejgaon") /// alternative // kom use korbo // special perspose<br>
console.log(typeof Country); //output: string<br>
console.log(typeof division);//output: string<br>
console.log(typeof thana);//output: object<br>
console.log(Country);//output: Bangladesh<br>
console.log(division);//output: Dhaka<br>
console.log(thana);//output:[String: 'Tejgaon'] <br>
// string onekta array moto  like <br>
// suppose <br>
const numbers = [ 20, 50, 40, 70]<br>
console.log(numbers.length); //output: 4 total koyta ase // <br>
console.log(numbers[2]);//output: 40<br>
// same string aerokom kaj kore // like<br>
<br>
const capital = "Dhaka"<br>
console.log(capital.length);//output: 5 ta dibe // aer mane koyta character ase ta na // je koyta ghor<br> thake..<br>
const capitals = "Dha ka"<br>
console.log(capitals.length) //output: 6 /// se khali gor ke '' string dore total ghor paise 6ta<br>
console.log(capitals[2]);//output: a ///<br>
console.log(capitals[3]);//output: '' ///<br>
<br>
const village = "Mohaatpur"<br>
village[0] = "S";<br>
console.log(village);  // se aeta change korbe na , karon<br>
<br>
// String immutabel >>>> not changeble<br>
// array immutabel >>>>  changeble /// array modde index dea element change kora jai ...<br>
<br>

    String Comparison Lowercase Uppercase And Trim <Start>
============================================================
<br>
// uppercase & lowercase 2ta alada taile compare korbo kibabe ? <br>
// just 2ta kei .tolowercase() / .toUppercase dea compare koren<br>
//.tolowercase() aeta ki ? aeta pura string ke choto hater banai <br>
// .touppercase() opposite banai<br>
// .tolowercase() / .toUppercase kokon lage ?<br>
// user jokon login kore , tokon borohater ba choto hater dei username , tarpor sei kintu nei <br>
// kibabe kore , se 2ta varibale ke boro / choto kore deke den dokte dei<br>
<br>
// Ex- 1<br>
const subject = "Chemisty"<br>
const Book = "chemisty"<br>
<br>
if (subject === Book){ 
    console.log("porikkai fatai felbo");<br>
}else{<br>
    console.log("hudai prista ultai"); <br>
}<br>
<br>
// output : hudai prista ultai : karon C , c 2ta js er kase aalada string <br>
<br>
// <br>
<br>
// Ex- 1.1<br>
const subject = "Chemisty"<br>
const Book = "chemisty"<br>
<br>
if (subject.toLowerCase === Book.toLowerCase){ // 2ta variable string kei choto hater korse , ciele<br> oppostie ta kore deken <br>
    console.log("porikkai fatai felbo");<br>
}else{<br>
    console.log("hudai prista ultai"); <br>
}<br>
<br>
// output :porikkai fatai felbo <br>
<br>
// <br>
<br>
/// oneke somoy 2ta string comparison e lowercase/ uppercase bad e o arrekta problem hoi seta holo<br>
// white space // so aeta aage o hote pare and whitespace pore o hote pare <br>
// white space samne hole trimStart() , picone hole trimEnd()\<br>
// aar jodi cie overall samne picone dite aeto bar check korben na <br>
// taile use sobsomoy trim bass <br>
// tobe mone rakben 2ta string er maje jodi white space thake taile kintu string kore laav nai
// trim kaj kore 2ta string er samne and picone white space remove
// Ex- 2<br>
<br>
let Drink = "water " // trim() dewwate sob white space katce<br>
let liquid = "  water"<br>
<br>
if ( Drink.trim()=== liquid.trim()){<br>
    console.log("pani ami kabo");<br>
}else{<br>
    console.log("vai trim koro joldi , pani kaite hobe");<br>
}<br>
//output: //pani ami kabo<br>
<br>
// Ex- 2.2<br>
<br>
let Drink = "water " // trim() dewwate sob white space katce<br>
let liquid = "  wate r"<br> /// kintu majer white space katbe na trim jotio trim use koren na ken
<br>
if ( Drink.trim()=== liquid.trim()){<br>
    console.log("pani ami kabo");<br>
}else{<br>
    console.log("vai trim koro joldi , pani kaite hobe");<br>
}<br>
//output: //vai trim koro joldi , pani kaite hobe<br>
<br>
// sumUP :<br>
// 2ta string comparison e problem 1 : onek somoy lower and uppercase problem hoi , use koren both .<br>touppercase()  othoba .tolowercase()<br>
/// 2ta string comparison e problem 2 : onek somoy white space pore , samne whitespace porle use<br>  koren     .trimStrat  aar picone porle use kore .trimEnd  aar jodi kono jamela na chan use koren .trim()<br>

    String Comparison Lowercase Uppercase And Trim <End>
============================================================


         String Slice, Join, Concat And Includes<Start>
        /// string holo sequence of character 
        /// slice (2,7) er mane se 2 theke 7 er aag porjonto nibe tar mane 2 theke 6 porjonto nibe.
        // slice ( 2,4) er mane 2 theke 3 porjonto nibe
        
        const address = "andorkilla"
        console.log(address.slice(2,5)); // outpit : dor

        /// know about substring & substr from google 

        // split mane kono kicu ke bag kora
        const sentence = "I am a good student"
        console.log(sentence.split());// return a array ,output: [ 'I am a good student' ]
        console.log(sentence.split('')); // sobieke aalda string dea bag korbe 



============================================================


         String Slice, Join, Concat And Includes<End>
============================================================
