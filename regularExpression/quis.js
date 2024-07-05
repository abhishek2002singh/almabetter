// 1
// How do we debug a script?
// Your Answer
// Use of JavaScript Validator & Debugger
// Correct Answer
// Use of JavaScript Validator & Debugger
// Justification
// We can use both a JavaScript validator and a JavaScript debugger to help us debug a script. A validator checks the syntax of the script for errors, while a debugger allows us to step through the code and inspect variables and other data at each step to identify and fix errors.
// 2
// What will be the output of the following JavaScript code?
// console.log(/\d/.test("1"));
// Your Answer
// True
// Correct Answer
// True
// Justification
// The regular expression /\d/ matches any digit character, and it will return true as there is a digit "1" in the provided string "1".
// 3
// What is it called when we make a mistake in the script?
// Your Answer
// Bug
// Correct Answer
// Bug
// Justification
// In programming, when a mistake is made in the code, it is commonly referred to as a "bug". This can cause unexpected behavior or errors when the code is run. The process of finding and fixing these bugs is called "debugging".
// 4
// What would result from the following statement in JavaScript using regular expression methods?
// var str = "123 456 789";
// var result = str.split(/\s+/);
// console.log(result);
// Your Answer
// ["123", "456", "789"]
// Correct Answer
// ["123", "456", "789"]
// Justification
// In the given statement, the string "123-456-789" is split using the regular expression pattern "/-/", which matches the hyphen character "-". The split() method returns an array of substrings that are separated by the matching pattern. Therefore, the result of the statement would be an array of three strings: ["123", "456", "789"].
// 5
// What will be the result when non greedy repetition is used on the pattern /a+?b/?
// Your Answer
// Matches the letter b preceded by the fewest number of a’s possible
// Correct Answer
// Matches the letter b preceded by the fewest number of a’s possible
// Justification
// When a question mark "?" is added to a quantifier, such as "+" or "*", it makes the repetition non-greedy. In the regular expression /a+?b/, the "+" quantifier matches one or more occurrences of the preceding character "a", and the "?" makes the repetition non-greedy. Therefore, the regular expression matches the letter "b" preceded by the fewest number of "a"s possible. For example, the regular expression will match "ab" in the string "aab", but it will not match "aab" because the repetition is non-greedy and only one "a" is consumed before the "b" is found.
// 6
// When should you use the console.log() function to debug your JavaScript code?
// Your Answer
// To print out variable values or messages to the console to help you check if the logic is correct
// Correct Answer
// To print out variable values or messages to the console to help you check if the logic is correct
// Justification
// The console.log() function is used to print out messages or variable values to the console, which can be helpful in checking if the logic is correct in your code. It is commonly used for debugging purposes and is useful in identifying issues related to variables, loops, or conditional statements. However, it is not a substitute for the debugger statement or breakpoints, which allow for more in-depth inspection and control over the code execution.
// 7
// What does the subexpression /java(script)?/ result in?
// Your Answer
// It matches “java” followed by the optional “script”
// Correct Answer
// It matches “java” followed by the optional “script”
// Justification
// In a regular expression, placing a question mark "?" after a subexpression makes it optional, which means the subexpression may appear zero or one time. In the given regular expression /java(script)?/, the subexpression "(script)" is optional because it is followed by a question mark. Therefore, the regular expression matches "java" followed by zero or one occurrence of "script". It will match "java" alone or "javascript".
// 8
// The ‘$’ present in the RegExp object is called a ____________
// Your Answer
// metacharacter
// Correct Answer
// metacharacter
// Justification
// In a regular expression (RegExp), the symbol '$' is a metacharacter that matches the end of a string. Metacharacters have a special meaning in regular expressions and are used to define search patterns.
// 9
// Which technique can be used to trace the code flow and identify the cause of the error in JavaScript code?
// Your Answer
// Debugger statement
// Correct Answer
// Both a and b
// Justification
// Both console logging (option "a") and using the debugger statement (option "b") are techniques that can be used to trace the code flow and identify the cause of errors in JavaScript code.
// 10
// Consider the following JavaScript statement containing regular expressions and check if the pattern matches?
// var text = "testing: 1, 2, 3"
// var pattern = /d+/g;
// Your Answer
// pattern.test(text)
// Correct Answer
// pattern.test(text)
// Justification
// The method "test()" is a built-in function of a regular expression object in JavaScript, which returns true if the pattern is found in the specified text and false otherwise. In this case, the pattern "/d+/" matches any sequence of one or more digits, and the "g" modifier specifies a global search that finds all occurrences. Therefore, calling "pattern.test(text)" will return true if the string "text" contains any digit sequence, and false otherwise.
