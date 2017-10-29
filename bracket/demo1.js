/**
 * Created by wxc on 2017/10/16.
 */
'use strict';
/*提取数据
let regex = /(\d{4})-(\d{2})-(\d{2})/;
let string = "2017-06-12";
console.log( string.match(regex) );
//=> ["2017-06-12", "2017", "06", "12", index: 0, input: "2017-06-12"]
match 返回的一个数组，第一个元素是整体匹配结果，然后是各个分组（括号里）匹配的
内容，然后是匹配下标，最后是输入的文本。另外，正则表达式是否有修饰符 g，match
返回的数组格式是不一样的。
也可以使用构造函数的全局属性 $1 至 $9 来获取
反向引用 保证组引用的是同一个字符 \1 \3
括号嵌套的反向引用按左括号的顺序匹配
 \10表示第十个组
 引用不存在的分组会转义
 分组后面有量词 返回最后一次匹配的结果
 非捕获括号  （？：内容）不会被捕捉到


 使用字符串作为参数
 替换字符串可以插入下面的特殊变量名：

 变量名	代表的值
 $$	插入一个 "$"。
 $&	插入匹配的子串。
 $`	插入当前匹配的子串左边的内容。
 $'	插入当前匹配的子串右边的内容。
 $n
 假如第一个参数是 RegExp对象，并且 n 是个小于100的非负整数，那么插入第 n 个括号匹配的字符串。
 function replacer(match, p1, p2, p3, offset, string) {
 match	匹配的子串。（对应于上述的$&。）
 p1,p2, ...
 假如replace()方法的第一个参数是一个RegExp 对象，则代表第n个括号匹配的字符串。（对应于上述的$1，$2等。）

 offset
 匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是“abcd”，匹配到的子字符串是“bc”，那么这个参数将是1）

 string	被匹配的原字符串。
*/

//提取数据
/*let regex = /((\d{4})-(\d{2})-(\d{2}))/;
let string = '2017-06-12';
console.log(regex.test(string));

console.log(RegExp.$1);
console.log(RegExp.$2);
console.log(RegExp.$3);
console.log(RegExp.$4);*/

//替换

/*let regex = /((\d{4})-(\d{2})-(\d{2}))/;
let string = '2017-06-12';
console.log(string.replace(regex, '$3/$4/$2'));*/

//反向引用 保证组引用的是同一个字符
/*let regex = /\d{4}(-|\/|\.)\d{2}\1\d{2}/;
let string1 = "2017-06-12";
let string2 = "2017/06/12";
let string3 = "2017.06.12";
let string4 = "2016-06/12";
console.log( regex.test(string1) ); // true
console.log( regex.test(string2) ); // true
console.log( regex.test(string3) ); // true
console.log( regex.test(string4) ); // false*/

//分组之后的量词
/*let string = '123456';
let string1 = '123456 6';
let string2 = '123456 1';
let regex = /(\d)+/;
let regex1 = /(\d)+ \1/;
console.log(string.match(regex));
console.log(regex1.test(string1));
console.log(regex1.test(string2));*/


//去掉字符串两边的空格

/*function trim(str) {
    return str.replace(/^\s+|\s+$/, '');
}
console.log(trim('  hello   '));
console.log('hello');*/

/*
function trim(str) {
    return str.replace(/\s*(\S+)\s*$/, '$1');
}
console.log(trim('  hello  '));*/


//m每个单词首字母大写
/*function toUpper(str) {
    return str.replace(/(?:^|\s)\w/g, function (c) {
        console.log('c  :  ' + c);
        return c.toUpperCase();
    });
}
console.log(toUpper('hello world x'));*/

//驼峰化
/*function camelize (str) {
   return  str.replace(/[\s_-](.)?/g, function (match, c) {
       console.log('match: ' + match);
       console.log('c:  ' + c);
       return c ? c.toUpperCase() : '';
   });
}
console.log( camelize('-moz-transform') )*/;

//中线化
/*
function dasherize (str) {
    return str.replace(/([A-Z])/g, '-$1').replace(/-/g, '').toLowerCase();
}
console.log( dasherize('MozTransform') );*/

//html转义和反转义
// 将HTML特殊字符转换成等值的实体
/*
function escapeHTML (str) {
    var escapeChars = {
        '<' : 'lt',
        '>' : 'gt',
        '"' : 'quot',
        '&' : 'amp',
        '\'' : '#39'
    };
    return str.replace(new RegExp('[' + Object.keys(escapeChars).join('') +']', 'g'),
        function (match) {
            return '&' + escapeChars[match] + ';';
        });
}
console.log( escapeHTML('<div>Blah blah blah</div>') );*/

//匹配成对标签
/*
let regex = /^<([^>]+)>[\d\D]*<\/\1>$/;
let string1 = "<title>regular expression</title>";
let string2 = "<p>laoyao bye bye</p>";
let string3 = "<title>wrong!</p>";
console.log( regex.test(string1) ); // true
console.log( regex.test(string2) ); // true
console.log( regex.test(string3) ); // false*/
