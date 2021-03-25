let names: string[] = ['joske','franske','donald','achmed']
let capitalNames1: string[] = []
let capitalNames2: string[] = names.map(names2 =>names2.toUpperCase());
names.forEach(names1=>capitalNames1.push(names1.toUpperCase()));
console.log(capitalNames1);
console.log(capitalNames2);
export {};