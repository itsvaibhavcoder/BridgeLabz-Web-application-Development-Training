function reverseString(str) {
    const stack = [];
    let reversedStr = '';
  
    for (let char of str) {
      stack.push(char);
    }
  
    while (stack.length > 0) {
      reversedStr += stack.pop();
    }

    return reversedStr;
}
console.log(reverseString("hello"));
  