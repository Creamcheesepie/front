//test15.js
'use strict'
let text1 ="ABCDEFGHIJKLMNOPQRSTUWXYZabcde";
let text2 ="       abc abc bcdef   abc ghi    jklm   abc  ABC....    "
//     0         1         2         
//     012345678901234567890123456789
// ABCDEFGHIJKLMNOPQRSTUWXYZabcde

// demo.innerHTML = text1;
// demo.innerHTML = text1.length
// demo.innerHTML =text1.substring(0,10);
// demo.innerHTML =text1.slice(10);
// demo.innerHTML =text1.substring(10);
// demo.innerHTML =text1.substr(10);
// demo.innerHTML =text1.replace('ABC','123');
// demo.innerHTML =text2.replace('abc','123');
// demo.innerHTML =text2.replaceAll('abc','123');
// demo.innerHTML =text2.toUpperCase();
// demo.innerHTML =text2.toLowerCase();
// demo.innerHTML =text2.concat("안녕?","123?");
// demo.innerHTML =concat("안녕?","123?");(오류)
// demo.innerHTML =text2.trim() + "abc";
// demo.innerHTML =text2.trimStart() + "abc";
// demo.innerHTML ="ab2" +  text2.trimEnd() + "abc";
// demo.innerHTML =text2.replaceAll(' ','');
// demo.innerHTML =text1.charAt(5);
// demo.innerHTML =text1.charCodeAt(0);
/*
let mbc =text2.split('c');
// demo.innerHTML = mbc;
// demo.innerHTML += typeof(mbc);
let temp='';
for(let item of mbc){
  console.log(item);
  temp +=item;
}
demo.innerHTML=temp;
*/
/* 이부분 체크하기
let tel='010-3424-2704';
let title =['지역번호','국번호','전화번호']
let output='';
tel.split('-');
tel.array.forEach((tel,i) => {
  output+= title[i] + " : " + tel[i] +"<br/>";
});
demo.innerHTML=output;
*/
// demo.innerHTML = text1.indexOf('a');
// demo.innerHTML = text2.indexOf('a');
// demo.innerHTML = text2.lastIndexOf('a');
// demo.innerHTML = text2.search('t');
// demo.innerHTML = text2.match('abc');
// demo.innerHTML = text2.includes('abc');

let price = 100;
let vat = 0.25;
let total = price*(1+vat);

// let str = "총금액 : " + total;
let str =`총금액  : ${price*(1+vat)}원`; //EL표기법(Expression Language) =>${}
demo.innerHTML = str;