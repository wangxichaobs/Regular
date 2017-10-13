/**
 * Created by wxc on 2017/10/12.
 */
//匹配 16 进制颜色值
/*let string = '#ffbbad #Fc01DF #FFF #ffE';
let regex = /#([\da-fA-F]{6}|[\da-fA-F]{3})/g;
console.log(string.match(regex));*/

//匹配时间
let string = '23:59 02:07';
let regex = /([01]\d|2[0-3]):[0-5]\d/g;
console.log(string.match(regex));

let string2 = '23:59 02:07 7:9';
let regex2 = /([1-9]|[01]\d|2[0-3]):([1-9]|[01-5])\d/g;
console.log(string2.match(regex2));
