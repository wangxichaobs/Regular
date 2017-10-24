/**
 * Created by wxc on 2017/10/17.
 */
/*
 .*  匹配  "abc"de  是非常耗时的 要回溯好多步
 常见的回溯模式主要有：贪婪模式，分支结构，惰性量词

 我们知道分支也是惰性的，比如 /can|candy/，去匹配字符串 "candy"，得到的结果是 "can"，因为分支会
 一个一个尝试，如果前面的满足了，后面就不会再试验了。
*/

//惰性量词
/*let string = '12345';
let regex = /(\d{1,3}?)(\d{1,3})/;
console.log(string.match(regex));

let string1 = '12345';
let regex1 = /^\d{1,3}?\d{1,3}$/;
console.log(string1.match(regex1));*/
