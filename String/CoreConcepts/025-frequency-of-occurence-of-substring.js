const str = "He fixed the issue, logged the issue, and explained the issue during the meeting.";
console.log(`Original String = ${str}`);

const subs = "issue";

const strArrSplittedBySubs = str.split(subs);

const count_of_occurence_of_subs = strArrSplittedBySubs.length - 1;
console.log(`Count of occurence of substring: ${subs} in the string = ${count_of_occurence_of_subs}`);