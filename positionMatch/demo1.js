/**
 * Created by wxc on 2017/10/15.
 */
'use strict';
/*
 ^、$、\b、\B、(?=p)、(?!p)  (?<=p) 和 (?<!p)
 多行匹配模式（即有修饰符 m）时，二者是行的概念.
 \b 是单词边界，具体就是 \w 与 \W 之间的位置，也包括 \w 与 ^ 之间的位置，和 \w 与 $ 之间的位置。
 (?=p) 就与 ^ 一样好理解，就是 p 前面的那个位置
 (?<=p) 和 (?<!p)
 */

//不匹配任何字符
/*
let string = 'easy';
let regex = /.^/g;
console.log(string.match(regex));*/

//数字千分位表示方法
/*let string = '192345435234642624244678';
console.log(string.replace(/(?!^)(?=(\d{3})+$)/g, ','));*/

/*
let string = '12345678 123456789';
//console.log(string.replace(/(?!\b)(?=(\d{3})+\b)/g, ','));
console.log(string.replace(/\B(?=(\d{3})+\b)/g, ','));*/

//货币格式化
/*let num = 188888;
console.log(num.toFixed(2).replace(/\B(?=(\d{3})+\b)/, ',').replace(/^/, '$ '));*/

//密码验证  密码长度 6-12 位，由数字、小写字符和大写字母组成，但必须至少包括 2 种字符。
//必须包含数字  (?=.*[0-9])   必须包含小写字母  (?=.*[a-z)    必须包含大写  (?=.*[A-Z])
let regex = /((?=.*[0-9])(?=.*[a-z)|(?=.*[a-z)(?=.*[A-Z])|(?=.*[A-Z])(?=.*[0-9]))^[0-9a-zA-Z]{6,12}$/;
console.log( regex.test("1234567") ); // false 全是数字
console.log( regex.test("abcdef") ); // false 全是小写字母
console.log( regex.test("ABCDEFGH") ); // false 全是大写字母
console.log( regex.test("ab23C") ); // false 不足6位
console.log( regex.test("ABCDEF234") ); // true 大写字母和数字
console.log( regex.test("abcdEF234") ); // true 三者都有