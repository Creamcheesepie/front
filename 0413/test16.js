//test16.js
'use strict'
let su1= 10;
let su2= -20;
let su3= 3.14;
let su4= -3.14;

let num = 0;

num = Math.min(su1,su2);//최솟값
num = Math.max(su1,su2,su3,su4);//최댓값

num = Math.ceil(su3); //올림
num = Math.floor(su3); //내림
num = Math.ceil(su4); //음의 수에도 무조건 더 큰값으로 보낸다.
num = Math.floor(su4); //음의 수에서도 무조건 작은 값으로 내린다.

num = Math.trunc(su3); //무조건 자르기
num = Math.trunc(su4); //무조건 자르기

num = Math.pow(2,5); //지수값
num = Math.sqrt(4); // 제곱근

num = Math.abs(su2); //절댓값

num = Math.random() //난수 (1> 실수형 난수 >=0)
num = Math.random()*10 
num = parseInt(Math.random()*10);
num = parseInt(Math.random()*10)+1;
num = Math.floor(Math.random()*10)+1;

num = Math.floor(Math.random()*(45+1-1))+1;
num = Math.floor(Math.random()*(14-4))+5;

//소수 반올림 : toFixed(); 매개변수 없으면 정수로 반올림, 있으면 소수이하 (매개변수 개수)자리수 만큼 반올림
num = su3.toFixed(2);

num = Math.round(su3);

demo.innerHTML= num;
demo.innerHTML +='';