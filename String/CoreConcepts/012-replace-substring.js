let str = "The mountain stood unmoved, watching centuries pass below";
console.log(`Original String = ${str}`);

substringToReplace = "watching";
newSubstring = "gazing";

str = str.replace(substringToReplace, newSubstring);
console.log(`After replacing substring: "${substringToReplace}" with "${newSubstring}", the string becomes = "${str}"`);
