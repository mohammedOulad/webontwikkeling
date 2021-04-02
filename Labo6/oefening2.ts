let names: string[] = ['joske','franske','donald','achmed'] //array aanmaken
let capitalNames1: string[] = [] //lege array aanmaken
let capitalNames2: string[] = names.map(names2 =>names2.toUpperCase()); //lege array die verwijst naar de aangemaakt array nieuwe parameter
names.forEach(names1=>capitalNames1.push(names1.toUpperCase()));
console.log(capitalNames1);
console.log(capitalNames2);
export {};