/// string declare korar system


const Country = "Bangladesh" ; // sobsomoy use
const division = `Dhaka` /// powerful string
 const thana = new String ("Tejgaon") /// alternative // kom use korbo // special perspose
console.log(typeof Country); //output: string
console.log(typeof division);//output: string
console.log(typeof thana);//output: object
console.log(Country);//output: Bangladesh
console.log(division);//output: Dhaka
console.log(thana);//output:[String: 'Tejgaon'] 
// string onekta array moto  like 
// suppose 
const numbers = [ 20, 50, 40, 70]
console.log(numbers.length); //output: 4 total koyta ase // 
console.log(numbers[2]);//output: 40
// same string aerokom kaj kore // like

const capital = "Dhaka"
console.log(capital.length);//output: 5 ta dibe // aer mane koyta character ase ta na // je koyta ghor thake..
const capitals = "Dha ka"
console.log(capitals.length) //output: 6 /// se khali gor ke '' string dore total ghor paise 6ta
console.log(capitals[2]);//output: a ///
console.log(capitals[3]);//output: '' ///

const village = "Mohaatpur"
village[0] = "S";
console.log(village);  // se aeta change korbe na , karon

// String immutabel >>>> not changeble
// array immutabel >>>>  changeble /// array modde index dea element change kora jai ...