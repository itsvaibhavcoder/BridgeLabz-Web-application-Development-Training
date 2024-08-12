function isValid(str){
    const stack = []
    const open = '({[';
    const close = ')}]';

    for(let char of str){
        if(open.includes(char)){
            stack.push(char);
        }
        else if(close.includes(char)){
         const index = close.indexOf(char);
         if(stack.length==0 || stack[stack.length-1] !== open[index]){
            return false;
         }
         stack.pop();
        }
    }
    return stack.length===0;
}
console.log(isValid("{[()]}"));