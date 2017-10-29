/**
 * Created by wxc on 2017/10/12.
 */

/*\d 表 记示 忆方式：其 [0-9]。表 英示 文是 是一位 digit 数字 （数字） 。 。
\D 表示 [^0-9]。表示除数字外的任意字符。
\w 表 记示 忆方式： [0-9a-zA-Z_] w 是 word 。表的示数字、 简写，也大小写 称单词字字符 母和下 。 划线。
\W 表示 [^0-9a-zA-Z_]。非单词字符。
\s
表示 [ \t\v\n\r\f]。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页
符。
记忆方式：s 是 space 的首字母，空白符的单词是 white space。
\S 表示 [^ \t\v\n\r\f]。 非空白符。
.表示 [^\n\r\u2028\u2029]。通配符，表示几乎任意字符。换行符、回车符、行分隔符和段分隔符
除外。
记忆方式：想想省略号 … 中的每个点，都可以理解成占位符，表示任何类似的东西

 {m,} 表示至少出现 m 次。
 {m} 等价于 {m,m}，表示出现 m 次。
 ? 等价于 {0,1}，表示出现或者不出现。
 记忆方式：问号的意思表示，有吗？
 +
 等价于 {1,}，表示出现至少一次。
 记忆方式：加号是追加的意思，得先有一个，然后才考虑追加。
 * 等价于 {0,}，表示出现任意次，有可能不出现。
 记忆方式：看看天上的星星，可能一颗没有，可能零散有几颗，可能数也数不过来。
*/
'use strict';
//匹配 16 进制颜色值
/*let string = '#ffbbad #Fc01DF #FFF #ffE';
let regex = /#([\da-fA-F]{6}|[\da-fA-F]{3})/g;
console.log(string.match(regex));*/

//匹配时间
/*let string = '23:59 02:07';
let regex = /([01]\d|2[0-3]):[0-5]\d/g;
console.log(string.match(regex));

let string2 = '23:59 02:07 7:9';
let regex2 = /(0?[0-9]|[1]\d|2[0-3]):(0?\d|[0-5]\d)/g;
console.log(string2.match(regex2));*/

//匹配日期
/*let string = '2017-06-10';
let regex = /\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/g;
console.log(string.match(regex));*/

//window 操作系统文件路径
/*let string = 'F:\\study\\javascript\\regex\\regular expression.pdf F:\\study\\javascript\\regex\\ F:\\study\\javascript    F:\\';
let regex = /[a-zA-Z]:\\([^\\:*<>|"\r\n/]+\\)*([^\\:*<>|"\r\n/]+)?/g;
console.log(string.match(regex));*/

//匹配id
/*let string = '<div id="container" class="main"></div>';
// let regex = /id=".*?"/g;
let regex = /id="[^"]*"/g;
console.log(string.match(regex));*/
















