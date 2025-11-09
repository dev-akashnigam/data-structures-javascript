const str = "He accidentally joined a yoga class thinking it was a sandwich shop";
console.log(`Original String = ${str}`);

const startIndexToCopy = 3;
const endIndexToCopy = 11;

const subs = str.substring(startIndexToCopy, endIndexToCopy);
console.log(`Substring from index: ${startIndexToCopy} to index: ${endIndexToCopy} = ${subs}`);