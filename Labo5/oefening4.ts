const calculateDogAge = (DogAge:number):number =>{return DogAge*7};
console.log(calculateDogAge(3));

const calculateAnimalAge = (age:number, omzettingsverhouding:number ):number => {return omzettingsverhouding * age};
console.log(calculateAnimalAge(2,7));

const calculateAnimalAgeFunctional = (omzettingsverhouding:number) => (age) =>   {return calculateAnimalAge(age, omzettingsverhouding); }
const calculateHamsterAge = calculateAnimalAgeFunctional(26);
console.log(calculateHamsterAge(.5));